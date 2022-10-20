import axios from 'axios'

export default async function handler(req, res) {

    if(req.method==='POST'){


        try {
           //let item;
           // const caddress='0xC169Fa886431c36210f74b3b7F0ABa0FD0e16759'
            const turi=req.body.tokenuri;
            //console.log("turi",turi);

            const item=await axios.get(turi).then((res)=>res.data);
           //console.log("ll",item);

            res.status(200).json({
                    item: item
              });

    }
       catch (err) {
            res.status(500).json({ message: "some error"});
        }
    }

}