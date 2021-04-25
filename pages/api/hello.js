// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as si from 'systeminformation';
import * as util from 'util';

const exec = util.promisify(require('child_process').exec);

export default async (req, res) => {
  let chia_show_results = {};
  let chia_farm_results = {};
  try{
    chia_show_results = await exec('/home/ubuntu/repos/linux_utils/chia_status.sh');
    chia_farm_results = await exec('/home/ubuntu/repos/linux_utils/chia_farm_status.sh');
  }
  catch(err){
    chia_show_results['err'] = err;
    res.status(400).json({show: chia_show_results, farm: chia_farm_results});
    return res.end();
  }
  if (chia_show_results.stderr) {
    chia_show_results['err'] = stderr;
    res.status(400).json({show: chia_show_results, farm: chia_farm_results});
    return res.end();
  }
  res.status(200).json({show: chia_show_results.stdout, farm: chia_farm_results.stdout});
  return res.end();
}
