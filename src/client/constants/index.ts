export * from './api'

// to avoid max-line-length error
const PIC_PART1 = 'https://selina-res.cloudinary.com/image/upload/if_iw_gt_2560,c_scale,w_2560/ar_3:2,c_crop'
const PIC_PART2 = '/e_sharpen:80,q_auto:good/f_auto/v1/s-cf-1/xdw7oj4u3s4v/47jq7N1GLIcmsnPgETWs5A/'
const PIC_PART3 = 'e989ba4ae19249223ab5b695ba0fa093/Selina_Manuel_Antonio_Exterior_02-2020_Credits_Ania_Jose__4__1_.jpg'

export const MAIN_PIC_URL = PIC_PART1 + PIC_PART2 + PIC_PART3
