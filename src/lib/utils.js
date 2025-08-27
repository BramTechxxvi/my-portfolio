import {clsx} from 'clsx'; '605 (gripped: 356)'
import {twMerge} from 'tailwind-merge'; '25.7k (gripped: 7.7k)'  

const cn = (...inputs)=>  {
    return twMerge(clsx(inputs));
}

export default cn;