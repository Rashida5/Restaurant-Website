import { useRecoilState } from "recoil";
import {atom} from 'recoil';
const xAtom=atom({
 key:'showTextKey',
 default:true,
});
const xAtom1=atom({
    key:'showTextKey1',
    default:true,
   });
const xAtom2=atom({
    key:'showTextKey2',
    default:true,
});
const xAtom3=atom({
    key:'showTextKey3',
    default:true,
})
const xAtom4=atom({
    key:'showTextKey4',
    default:true,
})
const xAtom5=atom({
    key:'showTextKey5',
    default:0,
})
export{xAtom,xAtom1,xAtom2,xAtom3,xAtom4,xAtom5};
