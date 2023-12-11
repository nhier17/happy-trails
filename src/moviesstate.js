
import elephanthill from "./images/elephanthill.jpg"
import hiker3 from "./images/hikers (3).jpg"
import hiker2 from "./images/hikers (2).jpg"
import hiking7 from "./images/hiking7 (3).jpg"
import hikers6 from "./images/hikers6.jpg"
import hikers7 from "./images/hikers7.jpg"
import ngare2 from "./images/ngare 2.png"
import ngare3 from "./images/ngare3.png"
import longonot1 from "./images/longonot1.JPEG"
import longonot2 from "./images/longonot2.jpg"

export const MovieState = () => {
  return [
    {
    
      title: "Menengai Crater",
      mainImg: hiker2,
      secondaryImg: hiking7,
      url: "/work/menengai-crater",
      awards: [
        {
          title: "Beginner Friendly",
          description:
            "“Menengai crater is believed to be the second largest caldera in the world and at 90km2 and it is almost 2500 meters above the sea level”",
        },
        {
          title: "Travel Guide and Attractions.",
          description:
            `Viewpoints of both Lake Nakuru and Lake Bogoria Hikes and nature trails
Caves
Picnic spots
The Menengai caldera
Mountain biking
Birding.`
             ,
        },
        {
          title: "Tips.",
          description:
            "There are curio shops available on site. You will have fun exploring the caldera as you descend.",
        },
      ],
    },
    {
      title: "Kijabe Hill",
      mainImg: hikers6,
      url: "/work/kijabe-hill",
      secondaryImg: hikers7,
      awards: [
        {
          title: "Beginner Friendly, Intermediate",
          description:
            "“Kijabe Hills presents a good challenge to every adventure-seeking lover of the outdoors. Join us as we set out to discover the magic of the Kijabe Hills Hike.”",
        },
        {
          title: "Travel Guide and Attractions.",
          description:
            `The adventure will lead us to walk through the dark tunnel, an underground water tunnel with no light at the end(Pun very much intended)
Eating and energizing by the railyway line 
            After that we will tackle Kijabe hills and on the peak we will be on the same level with Mt.Longonot which will be just meters away.We'll then follow ar oute where we'll walk under the canopy of cypress trees.This route leads us to the famous Soko Mjinga`,
        },
        {
          title: "Tips.",
          description:
            `Distance: 11km

            Maximum Elevation: 2,688m
            
            Maximum Elevation Gain: 773m
            
            Duration: 5-7 hours
            
            Difficulty: Moderate`,
        },
      ],
    },
    {
      title: "Elephant Hill",
      mainImg: elephanthill,
      url: "/work/elephant-hill",
      secondaryImg: hiker3,
      awards: [
        {
          title: "Intermediate, Advanced",
          description:
            `“Breaking your Back to the Top of Elephant Hill
            As intimidating as Elephant Hill is, it is important that one approach it with the same kind of attitude. You should pick challenging hiking trails every once in a while just to push yourself a little bit. It builds character not to mention, it is quite the adventure. Elephant Hill is a gem. It is loud and impossible to ignore. It is like eating peanuts. Chewing them is tedious but they are delicious so you do it anyway.”`,
        },
        {
          title: "Tour Guide and Attractions.",
          description:
            `Elephant Hill is a mammoth mound of earth that sits elegantly in the thick of the Aberdare Ranges. 
            Getting to the top of Elephant Hill is a wonderful achievement. There should be a medal at the top, instead you get something better for surviving the climb. You get a spectacular view of the highest point of the Aberdares, Sasumua Dam and Ndakaini. 
            On your way to the top, you will walk through a thick forest with a widely varied collection of tree species including bamboo. Every once in a while when you are thinking that maybe you should quit, you will look up as the sun peeks through the trees and catch your second wind. `,
        },
        {
          title: "Tips.",
          description:
            `Distance: 19km
            Maximum Elevation: 3,658m
            Maximum Elevation Gain: 1,189m
            Duration: 7-10 hours
            Difficulty: Hard; you will need to be reasonably fit to get to the peak.
            `,
        },
      ],
    },
    {
      title: "Ngare Ndare",
      mainImg: ngare2,
      url: "/work/ngare-ndare",
      secondaryImg: ngare3,
      awards: [
        {
          title: "Beginner Friendly",
          description:
            `Ngare Ndare forest is a lush indigenous forest at the northern foothills of Mt. Kenya. Azure pools glisten at the bottom of waterfalls and 200 years old trees.`,
        },
        {
          title: "Trip Guide and Attractions.",
          description:
            `Tree Canopy Walk  The canopy walkway is a 40 ft. high aerial bridge of wire mesh and cables meandering through the tree canopy and extending 450 metres long. Go For a Swim at The Waterfall  take a refreshing dip in the Ngare Ndare Waterfall. The water is cold but worth every moment.`,
        },
        {
          title: "Tips.",
          description:
            "7km hike, Duff mpararo and the test your guts on the Canopy walk.",
        },
      ],
    },
    {
      title: "Mt.Longot",
      mainImg: longonot2,
      url: "/work/mt-longonot",
      secondaryImg: longonot1,
      awards: [
        {
          title: "Beginner Friendly, Intermediate",
          description:
            `Mt. Longonot hike is a popular escape for outdoorers seeking fun and adventure. At the very basic level, hiking to its rim provides a fitness challenge, with the reward of a spectacular view across the Rift Valley`,
        },
        {
          title: "Trip Guide and Attractions.",
          description:
            `The entire Mt. Longonot hike takes 4-6 hours. The 3.1-kilometer trail up the mountain from the gate to the rim of the crater takes 45 minutes to 2 hours, depending on one’s competence. Once you reach the rim, you have the choice to descend or hike all the way around the crater. This adds some 7.2 km to the hike. A trek around the rim typically takes 2-3 hours. Mt Longonot hike presents a good challenge for everyone, kids, beginners, and advanced hikers alike.

            `,
        },
        {
          title: "Tips.",
          description:
            `Distance: 13.5km
            Maximum Elevation: 2780m
            Maximum Elevation Gain: 996m
            Duration: 4-6 hours
            Difficulty: Moderate to hard
            `,
        },
      ],
    },
    
  ];
};

