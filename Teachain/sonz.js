const fs = require('fs');
const path = require('path');
const axios = require('axios');
const { v4: uuidv4 } = require('uuid');
const { HttpsProxyAgent } = require('https-proxy-agent');
const { SocksProxyAgent } = require('socks-proxy-agent');
const readline = require('readline');

const { faker } = require('@faker-js/faker');

const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRjcXhsY2NmcmF1b251Y2V4dnh0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzI5NDA3MDQsImV4cCI6MjA0ODUxNjcwNH0.hVW14_IWTiEzoxenXiRsaAlXmdmtkrns5ARj5uJW_vg';
const HOURS_COMMITMENT_OPTIONS = ['1-2', '3-4', '5+'];
const ACCOUNTS_FILE = 'accounts.json';
const PROXIES_FILE = 'proxies.txt';

function createProxyAgent(proxyString) {
  if (!proxyString) return null;
  
  if (proxyString.startsWith('http://') || proxyString.startsWith('https://')) {
    return new HttpsProxyAgent(proxyString);
  }
  
  if (proxyString.includes('@') && !proxyString.includes('socks')) {
    const [auth, host] = proxyString.split('@');
    return new HttpsProxyAgent(`http://${auth}@${host}`);
  }
  
  if (proxyString.match(/^\d+\.\d+\.\d+\.\d+:\d+$/)) {
    return new HttpsProxyAgent(`http://${proxyString}`);
  }
  
  if (proxyString.includes('socks4://') || proxyString.includes('socks5://')) {
    return new SocksProxyAgent(proxyString);
  }
  
  if (proxyString.includes('socks4:') || proxyString.includes('socks5:')) {
    const [protocol, address] = proxyString.split(':');
    return new SocksProxyAgent(`${protocol.toLowerCase()}://${address}`);
  }
  
  return new HttpsProxyAgent(`http://${proxyString}`);
}

function generateEthAddress() {
  return '0x' + [...Array(40)].map(() => Math.floor(Math.random() * 16).toString(16)).join('');
}

function generateRegistrationData(referralLink) {
  const id = uuidv4();
  const name = faker.internet.username().toLowerCase();
  const telegramId = '@' + faker.internet.username().toLowerCase();
  const twitterHandle = 'https://x.com/' + faker.internet.username().toLowerCase();
  const email = faker.internet.email().toLowerCase();
  const hoursCommitment = HOURS_COMMITMENT_OPTIONS[Math.floor(Math.random() * HOURS_COMMITMENT_OPTIONS.length)];
  const willLead = Math.random() > 0.5;
  const ethAddress = generateEthAddress();
  
  return {
    registration: {
      id,
      name,
      telegram_id: telegramId,
      twitter_handle: twitterHandle,
      referred_by: referralLink,
      email,
      hours_commitment: hoursCommitment,
      will_lead: willLead,
      oath_completed: true
    },
    wallet: {
      registration_id: id,
      network: "ethereum",
      address: ethAddress
    }
  };
}

function loadAccounts() {
  try {
    if (fs.existsSync(ACCOUNTS_FILE)) {
      return JSON.parse(fs.readFileSync(ACCOUNTS_FILE, 'utf8'));
    }
  } catch (error) {
    console.error('Error loading accounts file:', error.message);
  }
  return [];
}

function saveAccounts(accounts) {
  try {
    fs.writeFileSync(ACCOUNTS_FILE, JSON.stringify(accounts, null, 2));
    console.log(`Accounts saved to ${ACCOUNTS_FILE}`);
  } catch (error) {
    console.error('Error saving accounts:', error.message);
  }
}

function loadProxiesFromFile() {
  try {
    if (fs.existsSync(PROXIES_FILE)) {
      const content = fs.readFileSync(PROXIES_FILE, 'utf8');
      return content.split('\n')
        .map(line => line.trim())
        .filter(line => line && !line.startsWith('#'));
    } else {
      console.warn(`Warning: ${PROXIES_FILE} not found.`);
      return [];
    }
  } catch (error) {
    console.error(`Error loading proxies from ${PROXIES_FILE}:`, error.message);
    return [];
  }
}

async function registerAccount(referralLink, proxyString = null) {
  try {
    const data = generateRegistrationData(referralLink);
    
    const axiosConfig = {};
    const proxyAgent = proxyString ? createProxyAgent(proxyString) : null;
    if (proxyAgent) {
      axiosConfig.httpsAgent = proxyAgent;
      axiosConfig.httpAgent = proxyAgent;
    }
    
    const headers = {
      "accept": "*/*",  
      "accept-language": "en-US,en;q=0.9",
      "apikey": API_KEY,
      "authorization": `Bearer ${API_KEY}`,
      "content-profile": "public",
      "content-type": "application/json",
      "prefer": "return=minimal",  
      "sec-ch-ua": "\"Chromium\";v=\"134\", \"Not:A-Brand\";v=\"24\", \"Brave\";v=\"134\"",
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": "\"Windows\"",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "cross-site",
      "sec-gpc": "1",
      "x-client-info": "supabase-js-web/2.47.8",
      "Referer": "https://sonz.ai/",
      "Referrer-Policy": "strict-origin-when-cross-origin"
    };
    
    const registrationUrl = "https://tcqxlccfrauonucexvxt.supabase.co/rest/v1/registrations";
    await axios.post(
      registrationUrl,
      [data.registration],
      { 
        ...axiosConfig,
        headers: headers
      }
    );
    
    const walletUrl = "https://tcqxlccfrauonucexvxt.supabase.co/rest/v1/wallet_addresses";
    await axios.post(
      walletUrl,
      [data.wallet],
      { 
        ...axiosConfig,
        headers: headers
      }
    );
    
    console.log(`✅ Successfully registered account: ${data.registration.name} (${data.registration.email})`);
    return { ...data.registration, wallet_address: data.wallet.address };
    
  } catch (error) {
    console.error(`❌ Registration failed: ${error.message}`);
    if (error.response) {
      console.error('Response error:', error.response.data);
      console.error('Status code:', error.response.status);
      console.error('Headers:', JSON.stringify(error.response.headers, null, 2));
    }
    return null;
  }
}

async function createMultipleAccounts(count, referralLink, proxies = []) {
  const accounts = loadAccounts();
  const newAccounts = [];
  
  for (let i = 0; i < count; i++) {
    console.log(`\nCreating account ${i + 1} of ${count}...`);
    
    const proxy = proxies.length > 0 ? proxies[i % proxies.length] : null;
    if (proxy) {
      console.log(`Using proxy: ${proxy}`);
    }
    
    if (i > 0) {
      const delay = 1000 + Math.floor(Math.random() * 2000);
      console.log(`Waiting ${delay}ms before next request...`);
      await new Promise(resolve => setTimeout(resolve, delay));
    }
    
    const account = await registerAccount(referralLink, proxy);
    if (account) {
      newAccounts.push(account);
      accounts.push(account);
      saveAccounts(accounts);
    }
  }
  
  console.log(`\n=== SUMMARY ===`);
  console.log(`Total accounts created: ${newAccounts.length}/${count}`);
  console.log(`All accounts saved to ${ACCOUNTS_FILE}`);
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('=== Sonz AI Auto Sign-up Bot | Airdrop Insider ===');

rl.question('Enter your referral link: ', (referralLink) => {
  if (!referralLink || referralLink.trim() === '') {
    console.error('Error: Referral link cannot be empty.');
    rl.close();
    return;
  }
  
  console.log(`Referral link set to: ${referralLink}`);
  
  rl.question('How many accounts do you want to create? ', (countStr) => {
    const count = parseInt(countStr.trim());
    
    if (isNaN(count) || count <= 0) {
      console.error('Invalid number. Please enter a positive number.');
      rl.close();
      return;
    }
    
    rl.question('Do you want to use proxies from proxies.txt? (y/n): ', (useProxiesAnswer) => {
      const useProxies = useProxiesAnswer.trim().toLowerCase() === 'y';
      
      if (useProxies) {
        const proxies = loadProxiesFromFile();
        
        if (proxies.length === 0) {
          console.log('\nNo proxies found in proxies.txt or file is empty.');
          rl.question('Do you want to continue without proxies? (y/n): ', (continueAnswer) => {
            if (continueAnswer.trim().toLowerCase() === 'y') {
              console.log(`\nStarting registration of ${count} accounts without proxies...`);
              createMultipleAccounts(count, referralLink, [])
                .finally(() => rl.close());
            } else {
              console.log('Registration cancelled.');
              rl.close();
            }
          });
        } else {
          console.log(`\nLoaded ${proxies.length} proxies from ${PROXIES_FILE}`);
          console.log(`Starting registration of ${count} accounts with ${proxies.length} proxies...`);
          createMultipleAccounts(count, referralLink, proxies)
            .finally(() => rl.close());
        }
      } else {
        console.log(`\nStarting registration of ${count} accounts without proxies...`);
        createMultipleAccounts(count, referralLink, [])
          .finally(() => rl.close());
      }
    });
  });
});