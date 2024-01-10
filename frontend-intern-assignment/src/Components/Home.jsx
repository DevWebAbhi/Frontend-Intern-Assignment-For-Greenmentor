import React from 'react'
import '../styles/Home.css'
import userimage from '../Assets/userimage.svg'
import bellicon from '../Assets/bellicon.svg'
import dots from '../Assets/dots.svg';
import zoom from '../Assets/zoom.svg';
import docdownload from '../Assets/docdownload.svg'
import ApexCharts from 'apexcharts'
import ApexChartChild from './ApexChartChild';
import DonutChart from './DonutChart';
import sideLogo from '../Assets/sideLogo.png'
import { Box,Image,Select,Button, border, } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
  } from '@chakra-ui/react'
const Home = () => {

   
    const data = [
        {
          Date: '4/1/22',
          Month: 'Jan',
          Year: 2022,
          Supplier: 'Reliance',
          Emissions: 1698,
          Revenue: 203456,
          R_E: 120,
          YOYRECHANGE: null,
        },
        {
          Date: '3/1/23',
          Month: 'Jan',
          Year: 2023,
          Supplier: 'Reliance',
          Emissions: 1790,
          Revenue: 245678,
          R_E: 137,
          YOYRECHANGE: '15%',
        },
        {
          Date: '2/2/22',
          Month: 'Feb',
          Year: 2022,
          Supplier: 'Reliance',
          Emissions: 2108,
          Revenue: 203456,
          R_E: 96.5,
          YOYRECHANGE: null,
        },
        {
          Date: '5/2/23',
          Month: 'Feb',
          Year: 2023,
          Supplier: 'Adani',
          Emissions: 2205,
          Revenue: 220000,
          R_E: 99.8,
          YOYRECHANGE: '3%',
        },
        {
          Date: '6/3/22',
          Month: 'Mar',
          Year: 2022,
          Supplier: 'Reliance',
          Emissions: 2251,
          Revenue: 245647,
          R_E: 109.1,
          YOYRECHANGE: null,
        },
        {
          Date: '7/3/23',
          Month: 'Mar',
          Year: 2023,
          Supplier: 'Adani',
          Emissions: 2345,
          Revenue: 287545,
          R_E: 122.6,
          YOYRECHANGE: '12%',
        },
        {
          Date: '2/4/22',
          Month: 'Apr',
          Year: 2022,
          Supplier: 'Shaurya Drugs',
          Emissions: 1602,
          Revenue: 179853,
          R_E: 112.3,
          YOYRECHANGE: null,
        },
        {
          Date: '2/4/23',
          Month: 'Apr',
          Year: 2023,
          Supplier: 'Adani',
          Emissions: 1503,
          Revenue: 195395,
          R_E: 130.0,
          YOYRECHANGE: '16%',
        },
        {
          Date: '3/5/22',
          Month: 'May',
          Year: 2022,
          Supplier: 'Orlife Healthcare',
          Emissions: 3456,
          Revenue: 464464,
          R_E: 134.4,
          YOYRECHANGE: null,
        },
        {
          Date: '4/5/23',
          Month: 'May',
          Year: 2023,
          Supplier: 'Adani',
          Emissions: 4634,
          Revenue: 575747,
          R_E: 124.2,
          YOYRECHANGE: '-8%',
        },
        {
          Date: '3/6/22',
          Month: 'June',
          Year: 2022,
          Supplier: 'Orlife Healthcare',
          Emissions: 3245,
          Revenue: 464464,
          R_E: 143.1,
          YOYRECHANGE: null,
        },
        {
          Date: '4/6/23',
          Month: 'June',
          Year: 2023,
          Supplier: 'Adani',
          Emissions: 4634,
          Revenue: 575747,
          R_E: 124.2,
          YOYRECHANGE: '-13%',
        },
        {
          Date: '3/7/22',
          Month: 'July',
          Year: 2022,
          Supplier: 'Rezicure Pharmaceuticals',
          Emissions: 3543,
          Revenue: 464464,
          R_E: 131.1,
          YOYRECHANGE: null,
        },
        {
          Date: '5/7/23',
          Month: 'July',
          Year: 2023,
          Supplier: 'Reliance',
          Emissions: 3487,
          Revenue: 575747,
          R_E: 165.1,
          YOYRECHANGE: '26%',
        },
        {
          Date: '3/8/22',
          Month: 'Aug',
          Year: 2022,
          Supplier: 'Rezicure Pharmaceuticals',
          Emissions: 5445,
          Revenue: 643864,
          R_E: 118.2,
          YOYRECHANGE: null,
        },
        {
          Date: '5/8/23',
          Month: 'Aug',
          Year: 2023,
          Supplier: 'Merion Care',
          Emissions: 5258,
          Revenue: 689747,
          R_E: 131.2,
          YOYRECHANGE: '11%',
        },
        {
          Date: '2/9/22',
          Month: 'Sep',
          Year: 2022,
          Supplier: 'Ruzette Organics',
          Emissions: 4343,
          Revenue: 564651,
          R_E: 130.0,
          YOYRECHANGE: null,
        },
        {
          Date: '3/9/23',
          Month: 'Sep',
          Year: 2023,
          Supplier: 'Ruzette Organics',
          Emissions: 4524,
          Revenue: 578965,
          R_E: 128.0,
          YOYRECHANGE: '-2%',
        },
        {
          Date: '6/10/22',
          Month: 'Oct',
          Year: 2022,
          Supplier: 'Steller Bio Labs',
          Emissions: 3434,
          Revenue: 516513,
          R_E: 150.4,
          YOYRECHANGE: null,
        },
        {
          Date: '6/10/23',
          Month: 'Oct',
          Year: 2023,
          Supplier: 'Steller Bio Labs',
          Emissions: 3332,
          Revenue: 524535,
          R_E: 157.4,
          YOYRECHANGE: '5%',
        },
        {
          Date: '10/11/22',
          Month: 'Nov',
          Year: 2022,
          Supplier: 'Eskos Pharma',
          Emissions: 3464,
          Revenue: 546561,
          R_E: 157.8,
          YOYRECHANGE: null,
        },
        {
          Date: '10/11/23',
          Month: 'Nov',
          Year: 2023,
          Supplier: 'Eskos Pharma',
          Emissions: 3535,
          Revenue: 576855,
          R_E: 163.2,
          YOYRECHANGE: '3%',
        },
        {
          Date: '1/12/22',
          Month: 'Dec',
          Year: 2022,
          Supplier: 'Adani',
          Emissions: 2324,
          Revenue: 343535,
          R_E: 147.8,
          YOYRECHANGE: null,
        },
        {
          Date: '2/12/23',
          Month: 'Dec',
          Year: 2023,
          Supplier: 'Reliance',
          Emissions: 2452,
          Revenue: 354646,
          R_E: 144.6,
          YOYRECHANGE: '-2%',
        },
      ];



  return (
    <div className='home-div'>
      
     <Box width={'20%'} height={'1306px'} backgroundColor={'#181818'}>
     <Box padding={'13px 10px 13px 30px'} >
            <Image src={sideLogo}/>
       </Box>
       <Box padding={'10px 0 10px 0'} >
        <Box padding={'13px 10px 13px 20px'} width={'max-content'} color={'#5C5C5C'} fontFamily={'Inter'} fontWeight={'500'} fontSize={'14px'} textAlign={'left'}>DATA-IN</Box>
        <Box padding={'13px 10px 13px 20px'} display={'flex'}><Box marginTop={'5px'} marginLeft={'10px'} marginRight={'5px'}>
        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
            <g clip-path="url(#clip0_34_317)">
            <path d="M8.14581 12.0417C9.03123 12.0417 9.78395 11.7317 10.404 11.1116C11.024 10.4916 11.3338 9.73912 11.3333 8.85418V5.66668H8.14581C7.2604 5.66668 6.50767 5.97669 5.88765 6.59672C5.26762 7.21675 4.95784 7.96923 4.95831 8.85418C4.95831 9.16112 4.99963 9.45626 5.08227 9.73959C5.16491 10.0229 5.28887 10.2945 5.45415 10.5542L5.17081 10.8375C5.04095 10.9674 4.97602 11.1327 4.97602 11.3333C4.97602 11.534 5.04095 11.6993 5.17081 11.8292C5.30067 11.959 5.46595 12.024 5.66665 12.024C5.86734 12.024 6.03262 11.959 6.16248 11.8292L6.44581 11.5458C6.70554 11.7111 6.97706 11.8351 7.2604 11.9177C7.54373 12.0004 7.83887 12.0417 8.14581 12.0417ZM8.14581 10.625C8.03956 10.625 7.93331 10.6132 7.82706 10.5896C7.72081 10.566 7.61456 10.5365 7.50831 10.5011L8.99581 8.99584C9.12567 8.86598 9.19061 8.70071 9.19061 8.50001C9.19061 8.29932 9.12567 8.13404 8.99581 8.00418C8.86595 7.87432 8.70067 7.80939 8.49998 7.80939C8.29929 7.80939 8.13401 7.87432 8.00415 8.00418L6.49894 9.49168C6.46352 9.38543 6.43401 9.27918 6.4104 9.17293C6.38679 9.06668 6.37498 8.96043 6.37498 8.85418C6.37498 8.35834 6.54616 7.93925 6.88852 7.59689C7.23088 7.25452 7.64998 7.08334 8.14581 7.08334H9.91665V8.85418C9.91665 9.35001 9.74547 9.76911 9.4031 10.1115C9.06074 10.4538 8.64165 10.625 8.14581 10.625ZM8.49998 16.2917L6.05623 14.3792L2.99269 14.0073L2.62081 10.9438L0.708313 8.50001L2.62081 6.05626L2.99269 2.99272L6.05623 2.62084L8.49998 0.708344L10.9437 2.62084L14.0073 2.99272L14.3791 6.05626L16.2916 8.50001L14.3791 10.9438L14.0073 14.0073L10.9437 14.3792L8.49998 16.2917ZM8.49998 14.4854L10.3771 13.0333L12.75 12.7323L13.0333 10.3771L14.4854 8.50001L13.0333 6.62293L12.7323 4.26772L10.3771 3.96668L8.49998 2.51459L6.6229 3.96668L4.24998 4.26772L3.96665 6.62293L2.51456 8.50001L3.96665 10.3771L4.26769 12.75L6.6229 13.0333L8.49998 14.4854Z" fill="white"/>
            </g>
            <defs>
            <clipPath id="clip0_34_317">
            <rect width="17" height="17" fill="white"/>
            </clipPath>
            </defs>
            </svg>
            </Box>
            <Box >
            <Menu>
                <MenuButton as={Button}  color={'white'} backgroundColor={'#181818'} border={'none'}>
                    Energy
                </MenuButton>
                <MenuList backgroundColor={'#181818'}>
                    <MenuItem backgroundColor={'#181818'} color={'white'} border={'none'} _hover={{borderBottom:'2px solid green'}}>Category1</MenuItem>
                    <MenuItem backgroundColor={'#181818'} color={'white'} border={'none'} _hover={{borderBottom:'2px solid green'}}>Category2</MenuItem>
                    <MenuItem backgroundColor={'#181818'} color={'white'} border={'none'} _hover={{borderBottom:'2px solid green'}}>Category3</MenuItem>
                    <MenuItem backgroundColor={'#181818'} color={'white'} border={'none'} _hover={{borderBottom:'2px solid green'}}>Category4</MenuItem>
                    <MenuItem backgroundColor={'#181818'} color={'white'} border={'none'} _hover={{borderBottom:'2px solid green'}}>Category5</MenuItem>
                </MenuList>
                </Menu>
            </Box>
            <Box>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5 8L12 16L19 8H5Z" fill="white"/>
                        </svg>
            </Box>
            </Box>
            <Box padding={'13px 10px 13px 20px'} display={'flex'}><Box marginTop={'2px'} marginLeft={'5px'} >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M12 3.76999L11.25 4.60999C11.25 4.60999 9.97 6.05999 8.68 7.93999C7.39 9.81999 6 12.07 6 14.23C6 15.8213 6.63214 17.3474 7.75736 18.4726C8.88258 19.5978 10.4087 20.23 12 20.23C13.5913 20.23 15.1174 19.5978 16.2426 18.4726C17.3679 17.3474 18 15.8213 18 14.23C18 12.07 16.61 9.81999 15.32 7.93999C14.5243 6.78422 13.6664 5.67258 12.75 4.60999L12 3.76999ZM12 6.89999C12.44 7.41999 12.84 7.84999 13.68 9.06999C14.89 10.83 16 13.07 16 14.23C16 16.45 14.22 18.23 12 18.23C9.78 18.23 8 16.45 8 14.23C8 13.07 9.11 10.83 10.32 9.06999C11.16 7.84999 11.56 7.41999 12 6.89999Z" fill="white"/>
</svg>
            </Box>
            <Box >
            <Menu>
                <MenuButton as={Button}  color={'white'} backgroundColor={'transparent'} border={'none'}>
                Water and Effluents
                </MenuButton>
                
                </Menu>
            </Box>
            <Box>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5 8L12 16L19 8H5Z" fill="white"/>
                        </svg>
            </Box>
            </Box>
       </Box>

       <Box padding={'10px 0 10px 0'} >
        <Box padding={'13px 10px 13px 20px'} width={'max-content'} color={'#5C5C5C'} fontFamily={'Inter'} fontWeight={'500'} fontSize={'14px'} textAlign={'left'}>ANALYZE</Box>
        <Box padding={'13px 10px 13px 20px'} display={'flex'}><Box marginTop={'5px'} marginLeft={'10px'} marginRight={'5px'}>
        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
            <g clip-path="url(#clip0_34_317)">
            <path d="M8.14581 12.0417C9.03123 12.0417 9.78395 11.7317 10.404 11.1116C11.024 10.4916 11.3338 9.73912 11.3333 8.85418V5.66668H8.14581C7.2604 5.66668 6.50767 5.97669 5.88765 6.59672C5.26762 7.21675 4.95784 7.96923 4.95831 8.85418C4.95831 9.16112 4.99963 9.45626 5.08227 9.73959C5.16491 10.0229 5.28887 10.2945 5.45415 10.5542L5.17081 10.8375C5.04095 10.9674 4.97602 11.1327 4.97602 11.3333C4.97602 11.534 5.04095 11.6993 5.17081 11.8292C5.30067 11.959 5.46595 12.024 5.66665 12.024C5.86734 12.024 6.03262 11.959 6.16248 11.8292L6.44581 11.5458C6.70554 11.7111 6.97706 11.8351 7.2604 11.9177C7.54373 12.0004 7.83887 12.0417 8.14581 12.0417ZM8.14581 10.625C8.03956 10.625 7.93331 10.6132 7.82706 10.5896C7.72081 10.566 7.61456 10.5365 7.50831 10.5011L8.99581 8.99584C9.12567 8.86598 9.19061 8.70071 9.19061 8.50001C9.19061 8.29932 9.12567 8.13404 8.99581 8.00418C8.86595 7.87432 8.70067 7.80939 8.49998 7.80939C8.29929 7.80939 8.13401 7.87432 8.00415 8.00418L6.49894 9.49168C6.46352 9.38543 6.43401 9.27918 6.4104 9.17293C6.38679 9.06668 6.37498 8.96043 6.37498 8.85418C6.37498 8.35834 6.54616 7.93925 6.88852 7.59689C7.23088 7.25452 7.64998 7.08334 8.14581 7.08334H9.91665V8.85418C9.91665 9.35001 9.74547 9.76911 9.4031 10.1115C9.06074 10.4538 8.64165 10.625 8.14581 10.625ZM8.49998 16.2917L6.05623 14.3792L2.99269 14.0073L2.62081 10.9438L0.708313 8.50001L2.62081 6.05626L2.99269 2.99272L6.05623 2.62084L8.49998 0.708344L10.9437 2.62084L14.0073 2.99272L14.3791 6.05626L16.2916 8.50001L14.3791 10.9438L14.0073 14.0073L10.9437 14.3792L8.49998 16.2917ZM8.49998 14.4854L10.3771 13.0333L12.75 12.7323L13.0333 10.3771L14.4854 8.50001L13.0333 6.62293L12.7323 4.26772L10.3771 3.96668L8.49998 2.51459L6.6229 3.96668L4.24998 4.26772L3.96665 6.62293L2.51456 8.50001L3.96665 10.3771L4.26769 12.75L6.6229 13.0333L8.49998 14.4854Z" fill="white"/>
            </g>
            <defs>
            <clipPath id="clip0_34_317">
            <rect width="17" height="17" fill="white"/>
            </clipPath>
            </defs>
            </svg>
            </Box>
            <Box >
            <Menu>
                <MenuButton as={Button}  color={'white'} backgroundColor={'transparent'} border={'none'}>
                    Energy
                </MenuButton>
                
                </Menu>
            </Box>
            <Box>
            
            </Box>
            </Box>
            <Box padding={'13px 10px 13px 20px'} display={'flex'}><Box marginTop={'2px'} marginLeft={'10px'}marginRight={'5px'} >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
<path d="M4.66634 2.66634V1.33301H11.333V2.66634H14.6663V3.99967H13.333V13.9997C13.333 14.1765 13.2628 14.3461 13.1377 14.4711C13.0127 14.5961 12.8432 14.6663 12.6663 14.6663H3.33301C3.1562 14.6663 2.98663 14.5961 2.8616 14.4711C2.73658 14.3461 2.66634 14.1765 2.66634 13.9997V3.99967H1.33301V2.66634H4.66634ZM3.99967 3.99967V13.333H11.9997V3.99967H3.99967ZM5.99967 5.99967H7.33301V11.333H5.99967V5.99967ZM8.66634 5.99967H9.99967V11.333H8.66634V5.99967Z" fill="white"/>
</svg>
            </Box>
            <Box >
            <Menu>
                <MenuButton as={Button}  color={'white'} backgroundColor={'transparent'} border={'none'}>
                Waste
                </MenuButton>
               
                </Menu>
            </Box>
            <Box color={'rgba(2, 171, 108, 1)'}>
            (βeta)
            </Box>
            </Box>
       </Box>
            <Box width={'max-content'} margin={'auto'} padding={'63.5px 0'}>
                <Button border={'none'} borderRadius={'11px'} fontFamily={'Intra'} color={'white'} padding={'20px'} backgroundColor={'#02AB6C'} width={'187px'}>Open Help Centre</Button>
            </Box>
     </Box>
       
      


      <div className='home-div-div2'>
           <div className='home-div-div2-div1'>
                <div >
                        <span className='category-symbol'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M16.7879 17.3556L14.2268 14.7939L14.5099 14.5111C15.7157 13.3066 16.3797 11.7048 16.3797 10.0006V9.60059H19.9993V10.0006C19.9993 12.6724 18.9592 15.1839 17.0709 17.0728L16.7879 17.3556ZM15.3507 14.7865L16.7819 16.2181C18.254 14.6151 19.0987 12.5754 19.191 10.4005H17.1687C17.0796 12.0354 16.4441 13.568 15.3507 14.7865ZM7.18987 4.2601L5.80557 0.917899L6.17317 0.763999C7.38397 0.257 8.67057 0 9.99747 0H10.3975V3.6208L9.99777 3.621C9.16092 3.62068 8.33227 3.78581 7.55947 4.1069L7.18987 4.2601ZM6.85287 1.3562L7.62687 3.2247C8.2619 3.00156 8.92531 2.86942 9.59737 2.8322V0.808399C8.65247 0.848899 7.73257 1.0323 6.85287 1.3562Z" fill="#02AB6C"/>
                        <path d="M16.7879 17.3556L14.2268 14.7939L14.5099 14.5111C15.7157 13.3066 16.3797 11.7048 16.3797 10.0006V9.60059H19.9993V10.0006C19.9993 12.6724 18.9592 15.1839 17.0709 17.0728L16.7879 17.3556ZM15.3507 14.7865L16.7819 16.2181C18.254 14.6151 19.0987 12.5754 19.191 10.4005H17.1687C17.0796 12.0354 16.4441 13.568 15.3507 14.7865ZM7.18987 4.2601L5.80557 0.917899L6.17317 0.763999C7.38397 0.257 8.67057 0 9.99747 0H10.3975V3.6208L9.99777 3.621C9.16092 3.62068 8.33227 3.78581 7.55947 4.1069L7.18987 4.2601ZM6.85287 1.3562L7.62687 3.2247C8.2619 3.00156 8.92531 2.86942 9.59737 2.8322V0.808399C8.65247 0.848899 7.73257 1.0323 6.85287 1.3562Z" fill="#02AB6C"/>
                        <path d="M16.0579 8.0001H19.7957C18.998 4.08751 15.9104 0.99781 11.997 0.201111V3.94251C13.9098 4.57491 15.4247 6.0881 16.0579 8.0001Z" fill="#02AB6C"/>
                        <path d="M16.0579 8.0001H19.7957C18.998 4.08751 15.9104 0.99781 11.997 0.201111V3.94251C13.9098 4.57491 15.4247 6.0881 16.0579 8.0001Z" fill="#02AB6C"/>
                        <path d="M12.8691 15.6985C11.99 16.1428 11.0131 16.3795 9.99957 16.3795C6.48177 16.3795 3.61988 13.5174 3.61988 9.99943C3.61988 8.10453 4.45168 6.35944 5.83537 5.17004L4.40368 1.71344C1.67938 3.54464 0.000579834 6.62153 0.000579834 10.0016C0.000579834 15.5148 4.48518 19.9999 9.99777 19.9999C11.991 19.9999 13.8944 19.4218 15.5167 18.3466L12.8691 15.6985Z" fill="#02AB6C"/>
                        </svg>
                        </span>
                        <span className='category-span'>category-1</span>

                </div>
                <div >
                    <span className='user-img-span'>
                        <img src={userimage} alt="User Image" />
                    </span>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5 8L12 16L19 8H5Z" fill="#474444"/>
                        </svg>
                    </span>
                    <span className='bell-icon-span'>
                        <img src={bellicon} alt="bell-icon-img" />
                        <span className='notification-count-span'>
                            <span>1</span>
                        </span>
                        
                    </span>
                </div>
                
           </div>
           <div className='home-div-div2-div2'>
                    <span>Show Timeline </span>  <span>: Jan’22 - Dec’23 |</span> 
                    
                    <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="8" height="6" viewBox="0 0 8 6" fill="none">
                    <path d="M2.90573 5.00001L0.305725 2.40001C-0.0109418 2.08335 -0.0816084 1.72101 0.093725 1.31301C0.269058 0.905012 0.581392 0.700679 1.03073 0.700012H6.18072C6.63072 0.700012 6.94339 0.904345 7.11872 1.31301C7.29406 1.72168 7.22306 2.08401 6.90573 2.40001L4.30572 5.00001C4.20572 5.10001 4.09739 5.17501 3.98073 5.22501C3.86406 5.27501 3.73906 5.30001 3.60573 5.30001C3.47239 5.30001 3.34739 5.27501 3.23073 5.22501C3.11406 5.17501 3.00573 5.10001 2.90573 5.00001Z" fill="black" fill-opacity="0.84"/>
                    </svg>
                    </span>
            </div>
            <div className='home-div-div2-div3'>
            <div>
                   <div>Revenue to emission ratio <span>
                   <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M5.83333 0C9.05508 0 11.6667 2.61158 11.6667 5.83333C11.6667 9.05508 9.05508 11.6667 5.83333 11.6667C2.61158 11.6667 0 9.05508 0 5.83333C0 2.61158 2.61158 0 5.83333 0ZM5.83333 1.16667C4.59566 1.16667 3.40867 1.65833 2.5335 2.5335C1.65833 3.40867 1.16667 4.59566 1.16667 5.83333C1.16667 7.07101 1.65833 8.258 2.5335 9.13317C3.40867 10.0083 4.59566 10.5 5.83333 10.5C7.07101 10.5 8.258 10.0083 9.13317 9.13317C10.0083 8.258 10.5 7.07101 10.5 5.83333C10.5 4.59566 10.0083 3.40867 9.13317 2.5335C8.258 1.65833 7.07101 1.16667 5.83333 1.16667ZM5.8275 4.66667C6.153 4.66667 6.41667 4.93033 6.41667 5.25583V8.24483C6.52787 8.30904 6.61477 8.40815 6.66391 8.52678C6.71305 8.64542 6.72167 8.77695 6.68843 8.90098C6.6552 9.02501 6.58197 9.13461 6.48009 9.21278C6.37822 9.29095 6.25341 9.33333 6.125 9.33333H5.83917C5.7618 9.33333 5.68518 9.3181 5.6137 9.28849C5.54222 9.25888 5.47727 9.21548 5.42256 9.16077C5.36785 9.10606 5.32446 9.04111 5.29485 8.96963C5.26524 8.89815 5.25 8.82154 5.25 8.74417V5.83333C5.09529 5.83333 4.94692 5.77188 4.83752 5.66248C4.72813 5.55308 4.66667 5.40471 4.66667 5.25C4.66667 5.09529 4.72813 4.94692 4.83752 4.83752C4.94692 4.72813 5.09529 4.66667 5.25 4.66667H5.8275ZM5.83333 2.91667C5.98804 2.91667 6.13642 2.97813 6.24581 3.08752C6.35521 3.19692 6.41667 3.34529 6.41667 3.5C6.41667 3.65471 6.35521 3.80308 6.24581 3.91248C6.13642 4.02188 5.98804 4.08333 5.83333 4.08333C5.67862 4.08333 5.53025 4.02188 5.42086 3.91248C5.31146 3.80308 5.25 3.65471 5.25 3.5C5.25 3.34529 5.31146 3.19692 5.42086 3.08752C5.53025 2.97813 5.67862 2.91667 5.83333 2.91667Z" fill="black" fill-opacity="0.8"/>
                    </svg>
                    </span></div>
                   <div>
                    <div className='boxes-content'>
                        <div >39699 Co2e</div>
                        <div>7.6% YOY</div>
                    </div>
                    </div> 
                </div>
                <div>
                   <div>Revenue to emission ratio <span>
                   <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M5.83333 0C9.05508 0 11.6667 2.61158 11.6667 5.83333C11.6667 9.05508 9.05508 11.6667 5.83333 11.6667C2.61158 11.6667 0 9.05508 0 5.83333C0 2.61158 2.61158 0 5.83333 0ZM5.83333 1.16667C4.59566 1.16667 3.40867 1.65833 2.5335 2.5335C1.65833 3.40867 1.16667 4.59566 1.16667 5.83333C1.16667 7.07101 1.65833 8.258 2.5335 9.13317C3.40867 10.0083 4.59566 10.5 5.83333 10.5C7.07101 10.5 8.258 10.0083 9.13317 9.13317C10.0083 8.258 10.5 7.07101 10.5 5.83333C10.5 4.59566 10.0083 3.40867 9.13317 2.5335C8.258 1.65833 7.07101 1.16667 5.83333 1.16667ZM5.8275 4.66667C6.153 4.66667 6.41667 4.93033 6.41667 5.25583V8.24483C6.52787 8.30904 6.61477 8.40815 6.66391 8.52678C6.71305 8.64542 6.72167 8.77695 6.68843 8.90098C6.6552 9.02501 6.58197 9.13461 6.48009 9.21278C6.37822 9.29095 6.25341 9.33333 6.125 9.33333H5.83917C5.7618 9.33333 5.68518 9.3181 5.6137 9.28849C5.54222 9.25888 5.47727 9.21548 5.42256 9.16077C5.36785 9.10606 5.32446 9.04111 5.29485 8.96963C5.26524 8.89815 5.25 8.82154 5.25 8.74417V5.83333C5.09529 5.83333 4.94692 5.77188 4.83752 5.66248C4.72813 5.55308 4.66667 5.40471 4.66667 5.25C4.66667 5.09529 4.72813 4.94692 4.83752 4.83752C4.94692 4.72813 5.09529 4.66667 5.25 4.66667H5.8275ZM5.83333 2.91667C5.98804 2.91667 6.13642 2.97813 6.24581 3.08752C6.35521 3.19692 6.41667 3.34529 6.41667 3.5C6.41667 3.65471 6.35521 3.80308 6.24581 3.91248C6.13642 4.02188 5.98804 4.08333 5.83333 4.08333C5.67862 4.08333 5.53025 4.02188 5.42086 3.91248C5.31146 3.80308 5.25 3.65471 5.25 3.5C5.25 3.34529 5.31146 3.19692 5.42086 3.08752C5.53025 2.97813 5.67862 2.91667 5.83333 2.91667Z" fill="black" fill-opacity="0.8"/>
                    </svg>
                    </span></div>
                   <div>
                   <div className='boxes-content'>
                        <div >136</div>
                        <div>3.6% YOY</div>
                    </div>
                    </div> 
                </div>
                <div>
                   <div>Revenue to emission ratio <span>
                   <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M5.83333 0C9.05508 0 11.6667 2.61158 11.6667 5.83333C11.6667 9.05508 9.05508 11.6667 5.83333 11.6667C2.61158 11.6667 0 9.05508 0 5.83333C0 2.61158 2.61158 0 5.83333 0ZM5.83333 1.16667C4.59566 1.16667 3.40867 1.65833 2.5335 2.5335C1.65833 3.40867 1.16667 4.59566 1.16667 5.83333C1.16667 7.07101 1.65833 8.258 2.5335 9.13317C3.40867 10.0083 4.59566 10.5 5.83333 10.5C7.07101 10.5 8.258 10.0083 9.13317 9.13317C10.0083 8.258 10.5 7.07101 10.5 5.83333C10.5 4.59566 10.0083 3.40867 9.13317 2.5335C8.258 1.65833 7.07101 1.16667 5.83333 1.16667ZM5.8275 4.66667C6.153 4.66667 6.41667 4.93033 6.41667 5.25583V8.24483C6.52787 8.30904 6.61477 8.40815 6.66391 8.52678C6.71305 8.64542 6.72167 8.77695 6.68843 8.90098C6.6552 9.02501 6.58197 9.13461 6.48009 9.21278C6.37822 9.29095 6.25341 9.33333 6.125 9.33333H5.83917C5.7618 9.33333 5.68518 9.3181 5.6137 9.28849C5.54222 9.25888 5.47727 9.21548 5.42256 9.16077C5.36785 9.10606 5.32446 9.04111 5.29485 8.96963C5.26524 8.89815 5.25 8.82154 5.25 8.74417V5.83333C5.09529 5.83333 4.94692 5.77188 4.83752 5.66248C4.72813 5.55308 4.66667 5.40471 4.66667 5.25C4.66667 5.09529 4.72813 4.94692 4.83752 4.83752C4.94692 4.72813 5.09529 4.66667 5.25 4.66667H5.8275ZM5.83333 2.91667C5.98804 2.91667 6.13642 2.97813 6.24581 3.08752C6.35521 3.19692 6.41667 3.34529 6.41667 3.5C6.41667 3.65471 6.35521 3.80308 6.24581 3.91248C6.13642 4.02188 5.98804 4.08333 5.83333 4.08333C5.67862 4.08333 5.53025 4.02188 5.42086 3.91248C5.31146 3.80308 5.25 3.65471 5.25 3.5C5.25 3.34529 5.31146 3.19692 5.42086 3.08752C5.53025 2.97813 5.67862 2.91667 5.83333 2.91667Z" fill="black" fill-opacity="0.8"/>
                    </svg>
                    </span></div>
                   <div>
                   <div className='boxes-content'>
                        <div >32% of scope3</div>
                        <div></div>
                    </div>
                    </div> 
                </div>
                <div>
                   <div>Total number of reached suppliers</div>
                   <div>
                   143
                    </div> 
                </div>
            </div>

            <div className='home-div-div2-div4'>
                <div>Emission/Revenue</div>
                
                <div>
                    <ApexChartChild data={data}/>
                </div>
            </div>
           <div>
           <div className='home-div-div2-div5'>
                <div>
                    <div className='home-div-div2-div5-div1-div1'>
                        <div>Emission by Suppliers</div>
                        <div>
                            <div className='home-div-div2-div5-chart-headding-svg'>
                                <div>
                                    <img src={zoom} alt="" />
                                </div>
                                <div>
                                    <img src={dots} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <DonutChart data={data} />
                    </div>
                </div>
                <div className='home-div-div2-div5-div2'>
                    <div>
                        <div>Supplier-wise <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="19" viewBox="0 0 21 19" fill="none">
                             <path d="M10.4999 0C16.2991 0 20.9999 4.25315 20.9999 9.5C20.9999 14.7469 16.2991 19 10.4999 19C4.70077 19 -7.62939e-05 14.7469 -7.62939e-05 9.5C-7.62939e-05 4.25315 4.70077 0 10.4999 0ZM10.4999 1.9C8.2721 1.9 6.13553 2.70071 4.56023 4.12599C2.98492 5.55126 2.09992 7.48435 2.09992 9.5C2.09992 11.5156 2.98492 13.4487 4.56023 14.874C6.13553 16.2993 8.2721 17.1 10.4999 17.1C12.7277 17.1 14.8643 16.2993 16.4396 14.874C18.0149 13.4487 18.8999 11.5156 18.8999 9.5C18.8999 7.48435 18.0149 5.55126 16.4396 4.12599C14.8643 2.70071 12.7277 1.9 10.4999 1.9ZM10.4894 7.6C11.0753 7.6 11.5499 8.0294 11.5499 8.5595V13.4273C11.7501 13.5319 11.9065 13.6933 11.995 13.8865C12.0834 14.0797 12.0989 14.2939 12.0391 14.4959C11.9793 14.6979 11.8475 14.8764 11.6641 15.0037C11.4807 15.131 11.2561 15.2 11.0249 15.2H10.5104C10.3712 15.2 10.2333 15.1752 10.1046 15.127C9.97592 15.0787 9.85901 15.0081 9.76054 14.919C9.66206 14.8299 9.58394 14.7241 9.53065 14.6077C9.47735 14.4913 9.44992 14.3665 9.44992 14.2405V9.5C9.17145 9.5 8.90437 9.39991 8.70746 9.22175C8.51055 9.04359 8.39992 8.80196 8.39992 8.55C8.39992 8.29804 8.51055 8.05641 8.70746 7.87825C8.90437 7.70009 9.17145 7.6 9.44992 7.6H10.4894ZM10.4999 4.75C10.7784 4.75 11.0455 4.85009 11.2424 5.02825C11.4393 5.20641 11.5499 5.44804 11.5499 5.7C11.5499 5.95196 11.4393 6.19359 11.2424 6.37175C11.0455 6.54991 10.7784 6.65 10.4999 6.65C10.2214 6.65 9.95437 6.54991 9.75746 6.37175C9.56055 6.19359 9.44992 5.95196 9.44992 5.7C9.44992 5.44804 9.56055 5.20641 9.75746 5.02825C9.95437 4.85009 10.2214 4.75 10.4999 4.75Z" fill="black" fill-opacity="0.8"/>
                            </svg>
                                                                        </span></div>
                        <div className='home-div-div2-div5-div2-div2'>
                           <div><img src={docdownload} alt="" /></div>
                           <div>Download</div> 
                        </div>
                    </div>
                    <div>
                        <table>
                        <tr>
                            <th>Months</th>
                            <th>EMISSIONS(IN Co2E)</th>
                            <th>REVENUE/EMISSION RATIO</th>
                            <th>YOU R/E CHANGE</th>
                        </tr>
                       {
                        data.map((e ,idx)=>(
                            e.YOYRECHANGE!=null&& idx<18?(
                            <tr>
                                <td>{e.Month}</td>
                                <td>{e.Emissions}</td>
                                <td>{e.R_E}</td>
                                <td>{e.YOYRECHANGE}</td>
                            </tr>
                            ):""
                            
                        ))
                       }
                        </table>
                    </div>
                </div>
           </div>
           </div>
      </div>
    </div>
  )
}

export default Home
