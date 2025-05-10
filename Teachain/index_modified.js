
// === Awal Script: Bersih dari .env, Pakai PK.txt ===
const ethers = require('ethers');
const readline = require('readline');
const chalk = require('chalk');
const cliSpinners = require('cli-spinners');
const { HttpsProxyAgent } = require('https-proxy-agent');
const fs = require('fs').promises;

// Sisanya sama seperti versi asli kamu
// Tapi sudah menghapus require('dotenv'), connectToNetwork lama, dan .env logic

// (Potongan kode kamu yang lain seperti ABIs, contract address, helper dll TETAP)
// Di bagian bawah: Ganti ke versi multi-account

async function loadPrivateKeys() {
  try {
    const data = await fs.readFile('PK.txt', 'utf8');
    const lines = data.split('\n').map(line => line.trim()).filter(line => line);
    if (lines.length === 0) throw new Error('No private keys found in PK.txt');
    return lines;
  } catch (err) {
    console.error(chalk.red(`Failed to read PK.txt: ${err.message}`));
    process.exit(1);
  }
}

async function connectToNetworkWithKey(privateKey) {
  try {
    const proxies = await loadProxies();
    const proxy = getRandomProxy(proxies);
    const proxyUrl = parseProxy(proxy);

    let provider;
    if (proxyUrl) {
      const agent = new HttpsProxyAgent(proxyUrl);
      provider = new ethers.providers.JsonRpcProvider({
        url: network.rpc,
        headers: { 'User-Agent': 'Mozilla/5.0' },
        agent
      });
    } else {
      provider = new ethers.providers.JsonRpcProvider(network.rpc);
    }

    const wallet = new ethers.Wallet(privateKey, provider);
    return { provider, wallet, proxy };
  } catch (error) {
    console.error(chalk.red('Connection error:', error.message));
    process.exit(1);
  }
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Override showMainMenu
const originalShowMainMenu = showMainMenu;
showMainMenu = async function (wallet, provider, proxy, index) {
  await displayBanner(provider);
  console.log(chalk.green(`\n>> WALLET #${index + 1}\n`));
  await getWalletInfo(wallet, provider, proxy);

  console.log(chalk.white('\n===== MAIN MENU ====='));
  console.log(chalk.white('1. Send TEA to random addresses'));
  console.log(chalk.white('2. Stake TEA'));
  console.log(chalk.white('3. Claim rewards'));
  console.log(chalk.white('4. Withdraw stTEA'));
  console.log(chalk.white('5. Daily task (100 transfers of 0.0001 TEA)'));
  console.log(chalk.white('6. Exit'));
  console.log(chalk.white('===================='));

  rl.question(chalk.yellow('\nChoose an option (1-6): '), async (answer) => {
    switch (answer) {
      case '1': await handleRandomTransfers(wallet); break;
      case '2': await handleStaking(wallet); break;
      case '3': await handleClaiming(wallet); break;
      case '4': await handleWithdrawing(wallet); break;
      case '5': await handleDailyTask(wallet); break;
      case '6':
        console.log(chalk.white('\nExiting wallet...'));
        return startMultiAccount(index + 1);
      default:
        console.log(chalk.red('Invalid option. Try again.'));
        return await showMainMenu(wallet, provider, proxy, index);
    }
  });
};

async function startMultiAccount(startIndex = 0) {
  const privateKeys = await loadPrivateKeys();
  if (startIndex >= privateKeys.length) {
    console.log(chalk.green('\n=== Semua akun selesai diproses! ==='));
    rl.close();
    return;
  }
  const currentKey = privateKeys[startIndex];
  const { provider, wallet, proxy } = await connectToNetworkWithKey(currentKey);
  await showMainMenu(wallet, provider, proxy, startIndex);
}

startMultiAccount();

rl.on('close', () => {
  console.log(chalk.green('\nThank you for using TEA BOT! 👋'));
  process.exit(0);
});
