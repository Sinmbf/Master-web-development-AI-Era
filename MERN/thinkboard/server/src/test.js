import dns from "node:dns/promises";

try {
  const result = await dns.resolveSrv("_xmpp-server._tcp.gmail.com");
  console.log(result);
} catch (err) {
  console.error(err);
}
