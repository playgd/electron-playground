'use strict';

import express from 'express';
const app = express();

app.use((req, res) => {
  res.json({ ok: 'ok' });
});

export default app;
