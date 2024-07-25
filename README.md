# VoteTalk

## Demo Video

<a href="https://drive.google.com/file/d/1KAJ8-7n7d-45NJiCBzcZ_7MjNhhIeT4T/view?usp=sharing">Click here to watch the demo for the app</a>

## Overview

VoteTalk is a real-time scalable voting app that enables users to engage in discussions on their favorite topics while participating in real-time voting. Whether it's a debate, a casual conversation, or a community discussion, VoteTalk provides a platform for lively interactions and instant feedback through voting.

## Features

<b>Real-Time Communication</b>: Engage in real-time conversations with other users. <br />
<b>Scalable Architecture</b>: Built to handle a large number of users simultaneously. <br />
<b>User-Friendly Interface</b>: Intuitive and easy-to-navigate interface.<br/>

## Tech Stack

<li>Next js</li>
<li>Typescript</li>
<li>Shadcn-ui</li>
<li>Socket.io</li>
<li>Upstash - Redis DB</li>

## Install Locally

```bash
git clone https://github.com/apk471/VoteTalk.git
```

```bash
cd VoteTalk
```

<b> Create .env file in both client and server folder with the following : </b>

```bash
/client/.env

UPSTASH_REDIS_REST_URL=
UPSTASH_REDIS_REST_TOKEN=
```

```bash
/server/.env

REDIS_CONNECTION_STRING=
```

<b>To start the project locally : </b>

```bash
client/
npm i
npm run dev
```

```bash
server/
npm run dev
```
