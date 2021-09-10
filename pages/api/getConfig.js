 const axios = require('axios');
import { findStrings, fantomenkrypto } from '../../lib/fantomenkrypto'



export default function handler(req, res) {

   axios.get('https://etjanst.stockholm.se/vardnadshavare/bundles/childcontroller').then(({data}) => {
    const [_, stringz, numberz] = data.match(/"(.*)",(\d+)/)
    const str = stringz.replace(/\\\"/g, '"')
    const strings = fantomenkrypto(str,numberz);

    res.status(200).json( { ...findStrings(strings), topologyBase64Iterations: 8 })

  })

}
