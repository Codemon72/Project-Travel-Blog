let map;
const mapDiv = document.getElementById("map");

const places = [
  {
    title: "Godafoss Waterfalls, Iceland",
    image: {
      src: "img/06Godafoss_Iceland800.jpg",
      alt: "Godafoss waterfalls in Iceland"
    },
    text: "Running, running, falling. Nothing, everything changes.",
    author: "Gundarik Icetrollson",
    author_image: "img/icon_icetroll.jpg",
    date: "Dec 18, 1820",
    location: "Godafoss Waterfalls, Iceland",
    location: {
      city: "Laugar",
      country: "Iceland",
      lat: 65.674663968,
      lng: -17.537331184
    }
  },
  {
    title: "The Golden City of Prague",
    image: {
      src: "img/09Prague800.jpg",
      alt: "Prague, the Golden City"
    },
    text: "City of old, alchemists, crazy kings, dumplings and sauerkraut.",
    author: "Karel",
    author_image: "img/icon_krtek.png",
    date: "Feb 28, 2020",
    location: "Prague, Czech Republic",
    location: {
      city: "Prague",
      country: "Czech Republik",
      lat: 50.073658,
      lng: 14.41854
    }
  },
  {
    title: "Old Paria, Utah",
    image: {
      src: "img/11Old_Paria_Utah_USA800.jpg",
      alt: "Old Paria in Utah, USA"
    },
    text:
      "The side of the mountains have spectacular colors due to their encrusted minerals like iron oxides, manganese, cobalt and others that geologists describe.",
    author: "Wild Bill",
    author_image: "img/icon_cowboy.jpg",
    date: "Jan 18, 2020",
    location: {
      city: "Kanab",
      country: "USA",
      lat: 37.034666528,
      lng: -112.525331232
    }
  },
  {
    title: "Peyto Lake Mountains, Canada",
    image: {
      src: "img/15Peyto_Lake_Mountains_Canada800.jpg",
      alt: "Peyto Lake Mountains in Canada"
    },
    text:
      "Energize! Where is Ryker? Make it so. Battle stations. Leave the bridge. One plum juice pleace.",
    author: "Wolpertinger",
    author_image: "img/icon_Wolpertinger.jpg",
    date: "March 9, 2020",
    location: "Peyto Lake Mountains, Canada",
    location: {
      city: "Peyto",
      country: "Canada",
      lat: 51.725515,
      lng: -116.522698
    }
  },
  {
    title: "Uluru, the Sleeping Heart of Australia",
    image: {
      src: "img/22uluru800.jpg",
      alt: "Uluru"
    },
    text:
      "Stuck in Dream Time! There is no such thing. Turn around to Uluru. Get back.",
    author: "Wild Bill",
    author_image: "img/icon_cowboy.jpg",
    date: "March 9, 2020",
    location: {
      city: "Alice Springs",
      country: "Australia",
      lat: -25.344,
      lng: 131.036
    }
  }
];
const allMarkers = [];

console.log(places[0].location.lat, places[0].location.lng);
console.log({ lat: places[0].location.lat, lng: places[0].location.lng });

const getPosition = place => {
  return { lat: place.location.lat, lng: place.location.lng };
};

function initMap() {
  const hamburg = { lat: 53.55618, lng: 9.92557 };

  map = new google.maps.Map(mapDiv, {
    center: getPosition(places[3]),
    zoom: 2
  });

  for (let i = 0; i < places.length; i++) {
    const marker = new google.maps.Marker({
      position: { lat: places[i].location.lat, lng: places[i].location.lng },
      map: map,
      title: `${places[i].title}`
    });
    allMarkers.push(marker);
    const infowindow = new google.maps.InfoWindow({
      content: `<h1>${places[i].title}</h1>
      <div>${places[i].text}</div>
      `
    });
    marker.addListener("click", () => {
      if (infowindow) {
        infowindow.close();
      }
      infowindow.open(map, marker);
    });
  }
}
console.log(allMarkers);

// const allMarkers = [
//   (godafoss = { lat: 65.674663968, lng: -17.537331184 }),
//   (prague = { lat: 50.073658, lng: 14.41854 }),
//   (oldParia = { lat: 37.034666528, lng: -112.525331232 }),
//   (peytoLake = { lat: 51.725515, lng: -116.522698 }),
//   (uluru = { lat: -25.344, lng: 131.036 })
// ];
