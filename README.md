# Dictionary Extension
A browser extension that adds a dictionary definition to the context menu when a word is selected. This extension currently runs on **manifest version 2**.

### Installation
--------------------------------------

1. Go to the extensions page in your browser (e.g., chrome://extensions/ in Chrome).
2. Enable **Developer mode** in the top right corner.
3. Click "Load unpacked" and select the folder containing the extension.

### Setup
-------------

- Create a file named .env in the root directory of the extension and add your API key to it:
`API_KEY=api_key_here`

- Install the 3 dependencies:
`npm install`


### Usage
----------
- Select a word on any webpage.
- Right-click and select "Look up 'selected word' in the dictionary" from the context menu.
- The definition of the selected word will be displayed in an alert.



### API
----------
This extension uses the [Merriam-Webster Collegiate Dictionary API](https://dictionaryapi.com/) to look up definitions. You will need to provide your own API key to use the extension.

<strong style="color: grey;">This extension is licensed under the MIT License.</strong>
