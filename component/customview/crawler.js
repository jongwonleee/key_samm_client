// const cheerio = require('cheerio-without-node-native');
// const axios = require('axios');
import {cheerio} from 'react-native-cheerio';
import {axios} from 'axios';
import { Alert } from 'react-native';

export const cralwer = async (url) => {

  const onlyTypeTag = ({ type }) => type == 'tag'
  Alert.alert(url);
//   try {
//       Alert.alert(url);
//     // const response = await axios(url);
//     // if (response.status === 200) {
//     //   const html = response.data;
//     //   console.log(html);
//     //   const $ = cheerio.load(html);
//     //   const data = $('.bbs_con tbody')[0].children
//     //     .filter(onlyTypeTag)
//     //     .map((tr) => tr.children
//     //       .filter(onlyTypeTag)
//     //       .map(({ children }) => (children.length > 0
//     //                               ?
//     //                               children[0].data == undefined
//     //                               ?
//     //                               '공지' : children[0].data
//     //                                : '')).splice(1))
    
  
//     //   const content = $('.bbs_con tbody')[0].children
//     //     .map((v, i) => {
//     //       if (i % 2 == 0) {
//     //         return v.children.filter(onlyTypeTag)[2].children[1].children[0].data
//     //       }
//     //     }).filter(v => v !== undefined)
  
      
//     //   const result = data.map((v, i) => {
//     //     v[1] = content[i]
//     //     return v
//     //   }) 
  
//     //   return result;
//     }
    
//   } catch (e) {
//     console.error(e);
//   }
}