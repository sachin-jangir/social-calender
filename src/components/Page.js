import Date from "./Date";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";

const Page = () => {

    const data1 = { 
        "_id": "5e8487295b430f72bf676461", 
        "month": "July", 
        "__v": 0, 
        "calendar_banner_style": "background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),  url(https://d23stw41ne88wu.cloudfront.net/upload/post/728f2eaa-ad39-4f0a-8606-caf0ace80e67.jpg)", 
        "calendar_banner_text": "July 2022", 
        "calendar_banner_url": "https://d23stw41ne88wu.cloudfront.net/upload/post/728f2eaa-ad39-4f0a-8606-caf0ace80e67.jpg", 
        "days": [{ "date": "2022-07-01", "card_body": "If you're proud to be a #Canadian, this one's for you!", "card_header": "Canada Day", "day_of_the_month": "01", "day_of_the_week": "Fri", "_id": "621cb2b8de4ac47e7c0f52e4" }, { "date": "2022-07-02", "card_image": "https://d23stw41ne88wu.cloudfront.net/upload/post/746e05fd-af02-475f-9e1f-e5e3d75b6d00.jpg", "card_color": "background-color: rgba(195, 107, 255, 1);color: rgba(255, 255, 255, 1);", "card_body": "Isn't it funny that world #UFOday is literally out of this world?", "card_header": "World UFO Day", "day_of_the_month": "02", "day_of_the_week": "Sat", "_id": "621cb2b8de4ac47e7c0f52e3", "month_week_color": "background-color: rgba(195, 107, 255, 1);color: rgba(255, 255, 255, 1);" }, { "date": "2022-07-03", "card_body": "Save the planet one #ReusableBag at a time", "card_header": "International Plastic Bag Free Day", "day_of_the_month": "03", "day_of_the_week": "Sun", "_id": "621cb2b8de4ac47e7c0f52e2" }, { "date": "2022-07-04", "card_image": "https://d23stw41ne88wu.cloudfront.net/upload/post/2cc7663d-2d7a-4bd3-9894-a45d2b69f496.jpg", "card_color": "background-color: rgba(255, 218, 59, 1);", "card_body": "Wishing you an #IndependenceDay filled with stars, stripes and lots of sparkle!", "card_header": "4th of July", "day_of_the_month": "04", "day_of_the_week": "Mon", "_id": "621cb2b8de4ac47e7c0f52e1", "month_week_color": "background-color: rgba(255, 218, 59, 1);" }, { "date": "2022-07-05", "card_body": "Anyone else still have scars from a #MechanicalPencil?", "card_header": "Mechanical Pencil Day", "day_of_the_month": "05", "day_of_the_week": "Tue", "_id": "621cb2b8de4ac47e7c0f52e0" }, { "date": "2022-07-06", "card_color": "color: rgba(35, 47, 58, 1);", "card_body": "Don't pass up a smooch from your pooch on International #KissingDay", "card_header": "International Kissing Day", "day_of_the_month": "06", "day_of_the_week": "Wed", "_id": "621cb2b8de4ac47e7c0f52df", "month_week_color": "color: rgba(35, 47, 58, 1);" }, { "date": "2022-07-07", "card_image": "https://d23stw41ne88wu.cloudfront.net/upload/post/c01da4eb-8afc-4012-97f2-9a70a6dc7622.jpg", "card_color": "background-color: rgba(35, 47, 58, 1);color: rgba(255, 255, 255, 1);", "card_body": "If you???re reading this, bring me some #chocolate", "card_header": "World Chocolate Day", "day_of_the_month": "07", "day_of_the_week": "Thu", "_id": "621cb2b8de4ac47e7c0f52de", "month_week_color": "background-color: rgba(35, 47, 58, 1);color: rgba(255, 255, 255, 1);" }, { "date": "2022-07-08", "card_body": "#UnplugTheDrama? No probllama.", "card_header": "National Savor the Comic, Unplug the Drama Day", "day_of_the_month": "08", "day_of_the_week": "Fri", "_id": "621cb2b8de4ac47e7c0f52dd" }, { "date": "2022-07-09", "card_body": "Happiness is fresh air and good friends at a #picnic", "card_header": "National Picnic Month", "day_of_the_month": "09", "day_of_the_week": "Sat", "_id": "621cb2b8de4ac47e7c0f52dc" }, { "date": "2022-07-10", "card_image": "https://d23stw41ne88wu.cloudfront.net/upload/post/a47bfbed-1d95-466c-a76a-4bdaedf8fdbc.jpg", "card_color": "background-color: rgba(50, 186, 250, 1);color: rgba(255, 255, 255, 1);", "card_body": "The only thing better than a #KittenDay video is a Kitten Day giveaway video", "card_header": "National Kitten Day", "day_of_the_month": "10", "day_of_the_week": "Sun", "_id": "621cb2b8de4ac47e7c0f52db", "month_week_color": "background-color: rgba(50, 186, 250, 1);color: rgba(255, 255, 255, 1);" }, { "date": "2022-07-11", "card_body": "Nothing screams #SundayFunday like a surprise sale", "card_header": "Sunday sale", "day_of_the_month": "11", "day_of_the_week": "Mon", "_id": "621cb2b8de4ac47e7c0f52da" }, { "date": "2022-07-12", "card_body": "There is beauty in #simplicity", "card_header": "National Simplicity Day", "day_of_the_month": "12", "day_of_the_week": "Tue", "_id": "621cb2b8de4ac47e7c0f52d9" }, { "date": "2022-07-13", "card_image": "https://d23stw41ne88wu.cloudfront.net/upload/post/76e8c5d4-4f35-4caa-bd69-58fbca065b0b.jpg", "card_color": "background-color: rgba(237, 72, 111, 1);color: rgba(255, 255, 255, 1);", "card_body": "Don't be afraid to embrace your #geekness", "card_header": "Embrace Your Geekness Day", "day_of_the_month": "13", "day_of_the_week": "Wed", "_id": "621cb2b8de4ac47e7c0f52d8", "month_week_color": "background-color: rgba(237, 72, 111, 1);color: rgba(255, 255, 255, 1);" }, { "date": "2022-07-14", "card_body": "Wish all of your French followers a happy #BastilleDay", "card_header": "Bastille Day", "day_of_the_month": "14", "day_of_the_week": "Thu", "_id": "621cb2b8de4ac47e7c0f52d7" }, { "date": "2022-07-15", "card_body": "#GiveSomethingAway to your audience with this awesome giveaway template", "card_header": "National Give Something Away Day", "day_of_the_month": "15", "day_of_the_week": "Fri", "_id": "621cb2b8de4ac47e7c0f52d6" }, { "date": "2022-07-16", "card_image": "https://d23stw41ne88wu.cloudfront.net/upload/post/c137bfe4-8f36-4922-8655-6f19fa4ee820.jpg", "card_color": "background-color: rgba(195, 107, 255, 1);color: rgba(255, 255, 255, 1);", "card_body": "Surprise your customers and start off the #weekend right with an awesome sale", "card_header": "Weekend Vibes", "day_of_the_month": "16", "day_of_the_week": "Sat", "_id": "621cb2b8de4ac47e7c0f52d5", "month_week_color": "background-color: rgba(195, 107, 255, 1);color: rgba(255, 255, 255, 1);" }, { "date": "2022-07-17", "card_body": "Take today as an opportunity to thank your #LoyalCustomers for their endless support", "card_header": "National Lottery Day", "day_of_the_month": "17", "day_of_the_week": "Sun", "_id": "621cb2b8de4ac47e7c0f52d4" }, { "date": "2022-07-18", "card_image": "https://d23stw41ne88wu.cloudfront.net/upload/post/b7ecfc7a-f4ae-4fc9-9c83-c50b09eb71e1.jpg", "card_color": "background-color: rgba(255, 218, 59, 1);", "card_body": "#Listen to what your customers have to say, they might surprise you", "card_header": "World Listening Day", "day_of_the_month": "18", "day_of_the_week": "Mon", "_id": "621cb2b8de4ac47e7c0f52d3", "month_week_color": "background-color: rgba(255, 218, 59, 1);" }, { "date": "2022-07-19", "card_body": "Let your inner child shine on #StickOutYourTongueDay", "card_header": "Stick Out Your Tongue Day", "day_of_the_month": "19", "day_of_the_week": "Tue", "_id": "621cb2b8de4ac47e7c0f52d2" }, { "date": "2022-07-20", "card_body": "Hop on the recent #Chess trend with an inspirational quote from everyone's favorite show", "card_header": "International Chess Day", "day_of_the_month": "20", "day_of_the_week": "Wed", "_id": "621cb2b8de4ac47e7c0f52d1" }, { "date": "2022-07-21", "card_image": "https://d23stw41ne88wu.cloudfront.net/upload/post/3b4b3b36-4955-41b0-b142-85c19ef57f22.jpg", "card_color": "background-color: rgba(35, 47, 58, 1);color: rgba(255, 255, 255, 1);", "card_body": "Boost your engagement this week with a #Sunset #PhotoChallenge", "card_header": "Capture the Sunset Week", "day_of_the_month": "21", "day_of_the_week": "Thu", "_id": "621cb2b8de4ac47e7c0f52d0", "month_week_color": "background-color: rgba(35, 47, 58, 1);color: rgba(255, 255, 255, 1);" }, { "date": "2022-07-22", "card_body": "Kick back, #relax and let this template do the talkin'", "card_header": "Summer Leisure Day", "day_of_the_month": "22", "day_of_the_week": "Fri", "_id": "621cb2b8de4ac47e7c0f52cf" }, { "date": "2022-07-23", "card_body": "Kick off the #SummerOlymics with this inaugural video", "card_header": "Summer Olympics", "day_of_the_month": "23", "day_of_the_week": "Sat", "_id": "621cb2b8de4ac47e7c0f52ce" }, { "date": "2022-07-24", "card_image": "https://d23stw41ne88wu.cloudfront.net/upload/post/f7bc7863-fb52-4daf-b633-a2341add751b.jpg", "card_color": "background-color: rgba(50, 186, 250, 1);color: rgba(255, 255, 255, 1);", "card_body": "Make some pour decisions on #TequilaDay", "card_header": "National Tequila Day", "day_of_the_month": "24", "day_of_the_week": "Sun", "_id": "621cb2b8de4ac47e7c0f52cd", "month_week_color": "background-color: rgba(50, 186, 250, 1);color: rgba(255, 255, 255, 1);" }, { "date": "2022-07-25", "card_body": "A video almost as awesome as our #parents", "card_header": "Parents' Day", "day_of_the_month": "25", "day_of_the_week": "Mon", "_id": "621cb2b8de4ac47e7c0f52cc" }, { "date": "2022-07-26", "card_body": "Make your customers an offer they can't refuse with an #AllOrNothing sale", "card_header": "National All Or Nothing Day", "day_of_the_month": "26", "day_of_the_week": "Tue", "_id": "621cb2b8de4ac47e7c0f52cb" }, { "date": "2022-07-27", "card_image": "https://d23stw41ne88wu.cloudfront.net/upload/post/2fd8d3ab-600c-4b8a-99ee-a8f396bc65cd.jpg", "card_color": "background-color: rgba(237, 72, 111, 1);color: rgba(255, 255, 255, 1);", "card_body": "Let your audience know that\nit's a real thing", "card_header": "Take Your Houseplants for a Walk Day", "day_of_the_month": "27", "day_of_the_week": "Wed", "_id": "621cb2b8de4ac47e7c0f52ca", "month_week_color": "background-color: rgba(237, 72, 111, 1);color: rgba(255, 255, 255, 1);" }, { "date": "2022-07-28", "card_body": "Share these useful #conservation tips with your audience to promote the importance of protecting nature", "card_header": "World Nature Conservation Day", "day_of_the_month": "28", "day_of_the_week": "Thu", "_id": "621cb2b8de4ac47e7c0f52c9" }, { "date": "2022-07-29", "card_body": "Be as bold as your #lipstick, today and every day", "card_header": "National Lipstick Day", "day_of_the_month": "29", "day_of_the_week": "Fri", "_id": "621cb2b8de4ac47e7c0f52c8" }, { "date": "2022-07-30", "card_image": "https://d23stw41ne88wu.cloudfront.net/upload/post/4b49dba4-f3d5-49e6-9ea9-3f4f3fd025cf.jpg", "card_color": "background-color: rgba(195, 107, 255, 1);color: rgba(255, 255, 255, 1);", "card_body": "There's nothing like a good bear #hug", "card_header": "Share a Hug Day", "day_of_the_month": "30", "day_of_the_week": "Sat", "_id": "621cb2b8de4ac47e7c0f52c7", "month_week_color": "background-color: rgba(195, 107, 255, 1);color: rgba(255, 255, 255, 1);" }, { "date": "2022-07-31", "card_body": "#AvocadoDay is all we've avo wanted", "card_header": "National Avocado Day", "day_of_the_month": "31", "day_of_the_week": "Sun", "_id": "621cb2b8de4ac47e7c0f52c6" }] }


    function rows() {
        let arr = [];
        for (let i = 0; i < data1.days.length; i++) {
            arr.push(
                <Date data={data1.days[i]} />

            );
        }
        return arr;
    }


    function CSSstring(string) {
        const css_json = `{"${string
          .replace(/; /g, '", "')
          .replace(/: /g, '": "')
          .replace(";", "")}"}`;
      
        const obj = JSON.parse(css_json);
      
        const keyValues = Object.keys(obj).map((key) => {
          var camelCased = key.replace(/-[a-z]/g, (g) => g[1].toUpperCase());
          return { [camelCased]: obj[key] };
        });
        return Object.assign({}, ...keyValues);
      }

    const btnCss = {
        height: '35px',
        width: '35px',
        backgroundColor: 'rgba(0,0,0,0.5)',
        cursor: 'pointer'
    }

    return (
        <div>


            {/* main header */}
            <div className="d-flex justify-content-center align-items-center" style={CSSstring(data1.calendar_banner_style)} >

                <h3 className="mx-3 text-white rounded-circle ps-1" style={btnCss}>
                    <FaAngleLeft />
                </h3>

                <h1 className="display-3 text-white pt-5 pb-5 mt-5 mb-5"> {data1.calendar_banner_text}</h1>

                <h3 className="mx-3 text-white rounded-circle ps-1" style={btnCss}>
                    <FaAngleRight />
                </h3>
            </div>


            {/* calender days */}
            <div className="container">
                <div className="d-flex flex-wrap">
                    {rows()}
                </div>
            </div>



        </div>
    )
}



export default Page