const imgHost = 'http://ec2-34-207-127-183.compute-1.amazonaws.com:8000';
const imgRoot = '/storage/imgs';

const ImgConfig = {
    users: imgHost + imgRoot + '/user/',
    events: imgHost + imgRoot + '/event/',
    dishes: imgHost + imgRoot + '/food/',
    category: imgHost + imgRoot + 'category' 

}

export default ImgConfig;