import { useRecoilState } from "recoil";
import {atom} from 'recoil';
const xAtom11=atom({
    key:'showTextKey11',
    default:false,
});
const xAtom12=atom({
    key:"ShowTextKey12",
    default:false,
})
const xAtom13=atom({
    key:"ShowTextKey13",
    default:false,
})
export  {xAtom11,xAtom12,xAtom13};