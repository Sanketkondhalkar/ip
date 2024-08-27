import express from "express";
import localIpUrl from "local-ip-url";
import cors from "cors";

const app = express();
const port = 6000;
app.use(cors());

app.use("/", (req, resp) => {
  return resp.status(200).json({ success: true, ip: localIpUrl() });
});

app.listen(port, (req, resp) => {
  console.log(`server running on ${port} port`);
});
