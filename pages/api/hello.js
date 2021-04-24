// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const si = require('systeminformation');

export default (req, res) => {
  si.cpu()
  .then(data => console.log(data))
  .catch(error => console.error(error));
  res.status(200).json({ name: 'John Doe' })
}
