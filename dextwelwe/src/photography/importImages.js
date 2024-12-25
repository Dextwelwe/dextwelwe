export default function getPictures(menuSelection){
    console.log(menuSelection)
    switch (menuSelection) {
        case "Hawaii" : 
        console.log(require.context('../images/hawaii', false, /\.(webp|jpeg)$/))
        return require.context('../images/hawaii', false, /\.(webp|jpeg)$/);
        case "Montreal" :
            return require.context('../images/montreal', false, /\.(webp|jpeg)$/);
        default : 
        return null;
    }
}
