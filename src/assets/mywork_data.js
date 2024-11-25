import project1_img from '../assets/images/porthunb.png'
import project2_img from '../assets/images/porthub3.png'
import project3_img from '../assets/images/porthub2.png'
import project4_img from '../assets/images/porthub4.png'

const mywork_data = [
    {
        w_no:1,
        w_name:"Web design",
        w_img:project1_img,
        W_page :()=>{
            window.open("https://hubnex-final-6rms.vercel.app/","_blank")
        }
    },
    {
        w_no:2,
        w_name:"Web design",
        w_img:project2_img,
        W_page :()=>{
window.open("https://vite-project-phi-vert.vercel.app/","_blank")
        }
    },
    {
        w_no:3,
        w_name:"Web design",
        w_img:project3_img,
        W_page :()=>{
            window.open("https://dashboard-nine-coral.vercel.app/","_blank")
        }
    },
    {
        w_no:4,
        w_name:"Web design",
        w_img:project4_img,
        W_page :()=>{
            window.open("https://rework-ai-red.vercel.app/","_blank")
        }
    },

]
 
export default mywork_data;