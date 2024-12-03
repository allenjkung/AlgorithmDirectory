# Algorithm Directory

This directory is meant to be used with Algorithm Directory Server which can be found in the following. [link](https://github.com/allenjkung/AlgorithmDirectoryServer).

Currently, it is meant to be used locally as the location for where to live and host it is still under research and therefore unknown.

## Installation

You have to install the npm dependencies. Run the following commands below in the directory location of choice.

```bash
git clone https://github.com/allenjkung/AlgorithmDirectory.git
cd AlgorithmDirectory
npm install
```

## Running for Development

To run the client, open a shell command prompt, go to the directory and run the following below.

```bash
npm start
```

Then, go to http://localhost:3000

## Running on Production

If you, for whatever reason, want to run the server on production without hosting it on a third party application, you first open a shell command prompt, go to the directory and run the following below.

```bash
npm run build
```

This will build the client and will communicate with the server.