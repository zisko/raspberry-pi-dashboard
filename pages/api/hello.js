// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as si from 'systeminformation';
import {exec} from 'child_process';

export default async (req, res) => {
  exec('zisko_chia_show', (err, stdout, stderr) => {
    let results = { name: stdout };
    if (stderr) {
      results['err'] = stderr;
      res.status(400).json(results);
      return res.end();
    }
    res.status(200).json(results);
    return res.end();
  });
}
