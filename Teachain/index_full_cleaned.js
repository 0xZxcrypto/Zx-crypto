      Successfully uninstalled fsspec-2025.3.2
  Attempting uninstall: hivemind
    Found existing installation: hivemind 1.1.11
    Uninstalling hivemind-1.1.11:
      Successfully uninstalled hivemind-1.1.11
Successfully installed absl-py-2.2.2 accelerate-1.6.0 aiohappyeyeballs-2.6.1 aiohttp-3.11.18 aiosignal-1.3.2 attrs-25.3.0 bitarray-3.4.0 certifi-2025.4.26 charset-normalizer-3.4.2 ckzg-2.1.1 colorlog-6.9.0 cy
toolz-1.0.1 datasets-3.5.1 dill-0.3.8 eth-abi-5.2.0 eth-account-0.13.7 eth-hash-0.7.1 eth-keyfile-0.8.1 eth-keys-0.7.0 eth-rlp-2.2.0 eth-typing-5.2.1 eth-utils-5.3.0 frozenlist-1.6.0 fsspec-2025.3.0 hexbytes-
1.3.0 hf-transfer-0.1.9 hivemind-1.2.0.dev0 huggingface-hub-0.30.2 markdown-3.8 markdown-it-py-3.0.0 mdurl-0.1.2 multidict-6.4.3 multiprocess-0.70.16 pandas-2.2.3 parsimonious-0.10.0 peft-0.15.2 propcache-0.3
.1 protobuf-5.29.4 psutil-7.0.0 pyarrow-20.0.0 pycryptodome-3.22.0 pygments-2.19.1 python-dateutil-2.9.0.post0 pytz-2025.2 pyunormalize-16.0.0 regex-2024.11.6 requests-2.32.3 rich-14.0.0 rlp-4.1.0 safetensors
-0.5.3 tensorboard-2.19.0 tensorboard-data-server-0.7.2 tokenizers-0.21.1 toolz-1.0.0 tqdm-4.67.1 transformers-4.51.3 trl-0.17.0 types-requests-2.32.0.20250328 tzdata-2025.2 urllib3-2.4.0 web3-7.11.0 websocke
ts-15.0.1 werkzeug-3.1.3 xxhash-3.5.0 yarl-1.20.0
>> Done!
>> Would you like to push models you train in the RL swarm to the Hugging Face Hub? [y/N] n
>> Good luck in the swarm!
>> Post about rl-swarm on X/twitter! --> https://tinyurl.com/swarmtweet
>> And remember to star the repo on GitHub! --> https://github.com/gensyn-ai/rl-swarm
/home/ubuntu/rl-swarm/hivemind_exp/gsm8k/generate_prompts.py:27: SyntaxWarning: invalid escape sequence '\s'
  STAGE2_SYSTEM_PROMPT = """
/home/ubuntu/rl-swarm/hivemind_exp/gsm8k/generate_prompts.py:43: SyntaxWarning: invalid escape sequence '\s'
  STAGE3_SYSTEM_PROMPT = """
INFO:hivemind_exp.chain_utils:✅d Connected to Gensyn Testnet
INFO:hivemind_exp.runner.gensyn.testnet_grpo_runner:Retrieved initial peers from chain: ['/ip4/38.101.215.14/tcp/31111/p2p/QmQ2gEXoPJg6iMBSUFWGzAabS2VhnzuS782Y637hGjfsRJ', '/ip4/38.101.215.14/tcp/31222/p2p/Qm
WhiaLrx3HRZfgXc2i7KW5nMUNK7P9tRc71yFJdGEZKkC', '/ip4/38.101.215.14/tcp/31333/p2p/QmQa1SCfYTxx7RvU7qJJRo79Zm1RAwPpkeLueDVJuBBmFp']
tokenizer_config.json: 100%|███████████████████████████████████████████████████| 7.36k/7.36k [00:00<00:00, 67.1MB/s]
vocab.json: 100%|██████████████████████████████████████████████████████████████| 2.78M/2.78M [00:00<00:00, 6.73MB/s]
merges.txt: 100%|██████████████████████████████████████████████████████████████| 1.67M/1.67M [00:00<00:00, 41.1MB/s]
Xet Storage is enabled for this repo, but the 'hf_xet' package is not installed. Falling back to regular HTTP download. For better performance, install the package with: `pip install huggingface_hub[hf_xet]`
or `pip install hf_xet`
WARN:huggingface_hub.file_download:Xet Storage is enabled for this repo, but the 'hf_xet' package is not installed. Falling back to regular HTTP download. For better performance, install the package with: `pi
p install huggingface_hub[hf_xet]` or `pip install hf_xet`
tokenizer.json: 100%|██████████████████████████████████████████████████████████| 11.4M/11.4M [00:00<00:00, 93.7MB/s]
added_tokens.json: 100%|███████████████████████████████████████████████████████████| 605/605 [00:00<00:00, 8.37MB/s]
special_tokens_map.json: 100%|█████████████████████████████████████████████████████| 614/614 [00:00<00:00, 8.88MB/s]
May 07 10:03:15.971 [INFO] Generating new identity to be saved in `/home/ubuntu/rl-swarm/swarm.pem`
INFO:hivemind_exp.runner.grpo_runner:🐝 Joining swarm with initial_peers = ['/ip4/38.101.215.14/tcp/31111/p2p/QmQ2gEXoPJg6iMBSUFWGzAabS2VhnzuS782Y637hGjfsRJ', '/ip4/38.101.215.14/tcp/31222/p2p/QmWhiaLrx3HRZfg
Xc2i7KW5nMUNK7P9tRc71yFJdGEZKkC', '/ip4/38.101.215.14/tcp/31333/p2p/QmQa1SCfYTxx7RvU7qJJRo79Zm1RAwPpkeLueDVJuBBmFp']
INFO:hivemind_exp.runner.grpo_runner:🐱 Hello 🐈 [quick tricky toad] 🦮 [QmdobaGrmNF7cPzYXiUL2J3vz7ZRwXVr9oCAwi6bRnRATw]!
INFO:hivemind_exp.runner.gensyn.testnet_grpo_runner:Registering self with peer ID: QmdobaGrmNF7cPzYXiUL2J3vz7ZRwXVr9oCAwi6bRnRATw
README.md: 100%|███████████████████████████████████████████████████████████████| 7.94k/7.94k [00:00<00:00, 58.9MB/s]
train-00000-of-00001.parquet: 100%|████████████████████████████████████████████| 2.31M/2.31M [00:00<00:00, 51.9MB/s]
test-00000-of-00001.parquet: 100%|████████████████████████████████████████████████| 419k/419k [00:00<00:00, 130MB/s]
Generating train split: 100%|███████████████████████████████████████| 7473/7473 [00:00<00:00, 1128457.44 examples/s]
Generating test split: 100%|█████████████████████████████████████████| 1319/1319 [00:00<00:00, 751159.13 examples/s]
Map: 100%|████████████████████████████████████████████████████████████| 7473/7473 [00:00<00:00, 61243.46 examples/s]
Map: 100%|████████████████████████████████████████████████████████████| 1319/1319 [00:00<00:00, 66857.86 examples/s]
config.json: 100%|█████████████████████████████████████████████████████████████████| 761/761 [00:00<00:00, 9.67MB/s]
Xet Storage is enabled for this repo, but the 'hf_xet' package is not installed. Falling back to regular HTTP download. For better performance, install the package with: `pip install huggingface_hub[hf_xet]`
or `pip install hf_xet`
WARN:huggingface_hub.file_download:Xet Storage is enabled for this repo, but the 'hf_xet' package is not installed. Falling back to regular HTTP download. For better performance, install the package with: `pi
p install huggingface_hub[hf_xet]` or `pip install hf_xet`
model.safetensors:  49%|████████████████████████████▎                             | 482model.safetensors:  51%|█████████████████████████████▌                            | 503model.safetensors:  53%|██████████
████████████████████▊                           | 524model.safetensors:  55%|████████████████████████████████                          | 545model.safetensors:  57%|█████████████████████████████████▏
              | 566model.safetensors:  59%|██████████████████████████████████▍                       | 587model.safetensors:  62%|███████████████████████████████████▋                      | 608model.safetenso
rs:  64%|████████████████████████████████████▉                     | 629model.safetensors:  66%|██████████████████████████████████████▏                   | 650model.safetensors:  68%|█████████████████████████
█████████████model.safetensors:  70%|████████████████████████████████████████▌     model.safetensors:  72%|█████████████████████████████████████model.safetensors:  74%|█████████████████████████████████████mod
el.safetensors:  76%|█████████████████████████████████████model.safetensors:  79%|█████████████████████████████████████model.safetensors:  81%|█████████████████████████████████████model.safetensors:  83%|████
████████████████████████████████████████████        model.safetensors:  85%|█████████████████████████████████████████model.safetensors:  87%|█████████████████████████████████████████model.safetensors:  89%|██
███████████████████████████████████████model.safetensors:  91%|█████████████████████████████████████████model.safetensors:  93%|█████████████████████████████████████████model.safetensors:  96%|███████████████
██████████████████████████model.safetensors:  98%|█████████████████████████████████████████model.safetensors: 100%|█████████████████████████████████████████model.safetensors: 100%|████████████████████████████
██████████████████████████████| 988M/988M [00:08<00:00, 117MB/s]
generation_config.json: 100%|███| 270/270 [00:00<00:00, 4.42MB/s]
INFO:hivemind_exp.runner.grpo_runner:Starting training 2025-05-07 10:03:37 for 3.0 epochs
INFO:hivemind_exp.trainer.hivemind_grpo_trainer:quick tricky toad:🐝 Joining round: 124 starting at stage: 0
INFO:hivemind_exp.trainer.hivemind_grpo_trainer:quick tricky toad:📈 Training round: 124 stage: 0
  0%|                                     | 0/20 [00:00<?, ?it/s]/home/ubuntu/rl-swarm/.venv/lib/python3.12/site-packages/torch/utils/data/dataloader.py:665: UserWarning: 'pin_memory' argument is set as true
but no accelerator is found, then device pinned memory won't be used.
  warnings.warn(warn_msg)
`use_cache=True` is incompatible with gradient checkpointing. Setting `use_cache=False`.
/home/ubuntu/rl-swarm/.venv/lib/python3.12/site-packages/transformers/trainer.py:3700: FutureWarning: `torch.cpu.amp.autocast(args...)` is deprecated. Please use `torch.amp.autocast('cpu', args...)` instead.
  ctx_manager = torch.cpu.amp.autocast(cache_enabled=cache_enabled, dtype=self.amp_dtype)
  5%|██▍                                             | 1/20 [05:56<1:52:59, 356.80s/it]{'loss': 0.0578, 'grad_norm': 5.026931285858154, 'learning_rate': 5e-07, 'num_tokens': 7189.0, 'completions/mean_length':
 212.6875, 'completions/min_length': 41.5, 'completions/max_length': 441.5, 'completions/clipped_ratio': 0.0, 'completions/mean_terminated_length': 212.6875, 'completions/min_terminated_length': 41.5, 'comple
tions/max_terminated_length': 441.5, 'rewards/xmlcount_reward_func/mean': 0.12674999609589577, 'rewards/xmlcount_reward_func/std': 0.25187762826681137, 'rewards/soft_format_reward_func/mean': 0.0, 'rewards/so
ft_format_reward_func/std': 0.0, 'rewards/strict_format_reward_func/mean': 0.0, 'rewards/strict_format_reward_func/std': 0.0, 'rewards/int_reward_func/mean': 0.03125, 'rewards/int_reward_func/std': 0.08838834
61356163, 'rewards/correctness_reward_func/mean': 0.0, 'rewards/correctness_reward_func/std': 0.0, 'rewards/cumulative_reward_0/mean': 0.0, 'rewards/cumulative_reward_0/std': 0.0, 'reward': 0.1579999998211860
7, 'reward_std': 0.21001071110367775, 'kl': 0.0, 'clip_ratio/low_mean': 0.0, 'clip_ratio/low_min': 0.0, 'clip_ratio/high_mean': 0.0, 'clip_ratio/high_max': 0.0, 'clip_ratio/region_mean': 0.0, 'epoch': 0.0}
{'loss': -0.0138, 'grad_norm': 5.618156433105469, 'learning_rate': 4.864543104251586e-07, 'num_tokens': 14921.0, 'completions/mean_length': 247.75, 'completions/min_length': 105.0, 'completions/max_length': 4
25.5, 'completions/clipped_ratio': 0.0, 'completions/mean_terminated_length': 247.75, 'completions/min_terminated_length': 105.0, 'completions/max_terminated_length': 425.5, 'rewards/xmlcount_reward_func/mean
': -0.06981249898672104, 'rewards/xmlcount_reward_func/std': 0.24738290905952454, 'rewards/soft_format_reward_func/mean': 0.03125, 'rewards/soft_format_reward_func/std': 0.0883883461356163, 'rewards/strict_fo
rmat_reward_func/mean': 0.0, 'rewards/strict_format_reward_func/std': 0.0, 'rewards/int_reward_func/mean': 0.0, 'rewards/int_reward_func/std': 0.0, 'rewards/correctness_reward_func/mean': 0.0, 'rewards/correc
tness_reward_func/std': 0.0, 'rewards/cumulative_reward_0/mean': 0.0, 'rewards/cumulative_reward_0/std': 0.0, 'reward': -0.03856249898672104, 'reward_std': 0.17209210991859436, 'kl': 0.0004943923449900467, 'c
lip_ratio/low_mean': 0.0, 'clip_ratio/low_min': 0.0, 'clip_ratio/high_mean': 0.0, 'clip_ratio/high_max': 0.0, 'clip_ratio/region_mean': 0.0, 'epoch': 0.0}
 20%|██████████████████████▍                                                                   25%|██████████████▎                                          | 5/20 [17:00<54:46, 219.07s/it]{'loss': 0.1152, 'gr
ad_norm': 8.400693893432617, 'learning_rate': 4.472851273490984e-07, 'num_tokens': 21834.0, 'completions/mean_length': 197.0625, 'completions/min_length': 30.5, 'completions/max_length': 423.5, 'completions/c
lipped_ratio': 0.0, 'completions/mean_terminated_length': 197.0625, 'completions/min_terminated_length': 30.5, 'completions/max_terminated_length': 423.5, 'rewards/xmlcount_reward_func/mean': -0.1258125025779
009, 'rewards/xmlcount_reward_func/std': 0.4048985242843628, 'rewards/soft_format_reward_func/mean': 0.0, 'rewards/soft_format_reward_func/std': 0.0, 'rewards/strict_format_reward_func/mean': 0.0, 'rewards/st
rict_format_reward_func/std': 0.0, 'rewards/int_reward_func/mean': 0.1875, 'rewards/int_reward_func/std': 0.2493581548333168, 'rewards/correctness_reward_func/mean': 0.125, 'rewards/correctness_reward_func/st
d': 0.3535533845424652, 'rewards/cumulative_reward_0/mean': 0.0, 'rewards/cumulative_reward_0/std': 0.0, 'reward': 0.18668752163648605, 'reward_std': 0.44379788637161255, 'kl': 0.0006847829536127392, 'clip_ra
tio/low_mean': 0.0, 'clip_ratio/low_min': 0.0, 'clip_ratio/high_mean': 0.0, 'clip_ratio/high_max': 0.0, 'clip_ratio/region_mean': 0.0, 'epoch': 0.0}
{'loss': 0.0869, 'grad_norm': 4.624168395996094, 'learning_rate': 3.867370395306068e-07, 'num_tokens': 28849.0, 'completions/mean_length': 209.8125, 'completions/min_length': 105.0, 'completions/max_length':
385.5, 'completions/clipped_ratio': 0.0, 'completions/mean_terminated_length': 209.8125, 'completions/min_terminated_length': 105.0, 'completions/max_terminated_length': 385.5, 'rewards/xmlcount_reward_func/m
ean': 0.042750000953674316, 'rewards/xmlcount_reward_func/std': 0.1699397787451744, 'rewards/soft_format_reward_func/mean': 0.0, 'rewards/soft_format_reward_func/std': 0.0, 'rewards/strict_format_reward_func/
mean': 0.0, 'rewards/strict_format_reward_func/std': 0.0, 'rewards/int_reward_func/mean': 0.0, 'rewards/int_reward_func/std': 0.0, 'rewards/correctness_reward_func/mean': 0.0, 'rewards/correctness_reward_func
/std': 0.0, 'rewards/cumulative_reward_0/mean': 0.0, 'rewards/cumulative_reward_0/std': 0.0, 'reward': 0.04274999350309372, 'reward_std': 0.16670041531324387, 'kl': 0.0006008548625686672, 'clip_ratio/low_mean
': 0.0, 'clip_ratio/low_min': 0.0, 'clip_ratio/high_mean': 0.0, 'clip_ratio/high_max': 0.0, 'clip_ratio/region_mean': 0.0, 'epoch': 0.0}
 40%|██████████████████████▊                                  | 8/20 [21:24<26:18, 131.51s/it]
[GENSYN] 0:bash*