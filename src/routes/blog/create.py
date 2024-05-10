import os
from datetime import datetime

def main():
    # Prompt the user for the title of the file
    title = input("Enter the title of the file: ")

    # Format the current date
    date = datetime.now().strftime('%Y-%m-%d')

    # Replace spaces with hyphens and convert to lowercase for the filename
    filename = f"{title.replace(' ', '-').lower()}.svx"

    # Prepare the content of the file
    content = f"""---
title: {title}
date: {date}
categories:
- foobar
---
"""

    # Write the content to the file
    with open(filename, 'w') as file:
        file.write(content)

    print(f"File {filename} has been created!")

if __name__ == "__main__":
    main()