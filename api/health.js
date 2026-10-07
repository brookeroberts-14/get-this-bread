export default function handler(req,res){res.setHeader('Access-Control-Allow-Origin','*');return res.status(200).json({status:'ok',service:'Recruiting Copilot Applicant API',version:'6.2.0'})}
