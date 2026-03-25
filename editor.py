import sys
import os
import re

file_path = sys.argv[1]
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

if 'git-rebase-todo' in os.path.basename(file_path).lower():
    # Change pick to reword for the target commit
    content = re.sub(r'pick (.*Renamed brand.*)', r'reword \1', content, flags=re.IGNORECASE)
    content = re.sub(r'pick (9aa7a4a.*)', r'reword \1', content, flags=re.IGNORECASE)
elif 'COMMIT_EDITMSG' in file_path or 'commit_editmsg' in os.path.basename(file_path).lower():
    # Fix the message to remove "Nano banana"
    content = re.sub(r'(?i)from nano banana ti ', 'to ', content)
    content = re.sub(r'(?i)from nano banana to ', 'to ', content)
    content = re.sub(r'(?i)nano banana', '', content)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)
