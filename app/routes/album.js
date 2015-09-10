import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return [{
      id: 1,
      rank: 1,
      title: "To Pimp a Butterfly",
      artist: "Kendrick Lamar",
      releaseDate: "15/03/2015",
      albumCover: "https://upload.wikimedia.org/wikipedia/en/f/f6/Kendrick_Lamar_-_To_Pimp_a_Butterfly.png",
      description: "To Pimp a Butterfly is the third studio album by American rapper Kendrick Lamar. It was released on March 15, 2015, by Top Dawg Entertainment and Aftermath Entertainment, and distributed by Interscope Records. The album was recorded in studios throughout the United States, with executive production from Dr. Dre and Anthony \"Top Dawg\" Tiffith. Boi-1da, Flying Lotus, Terrace Martin, Pharrell Williams, Knxwledge, Sounwave, Thundercat and several other hip hop producers also contributed. The album is influenced by aspects of funk, jazz and spoken word. Due to an error on the part of Interscope, To Pimp a Butterfly was released to the iTunes Store and Spotify a week earlier than scheduled. It debuted atop the Billboard 200 and received widespread acclaim from critics, who praised its musical scope and the social relevance of Lamar's lyrics. As of July 2015, it has sold 642,000 copies in the United States."
    }, {
      id: 2,
      rank: 2,
      title: "Carrie & Lowell",
      artist: "Sufjan Stevens",
      releaseDate: "31/03/2015",
      albumCover: "https://upload.wikimedia.org/wikipedia/en/thumb/e/ec/Sufjan_Stevens_-_Carrie_%26_Lowell.jpg/600px-Sufjan_Stevens_-_Carrie_%26_Lowell.jpg",
      description: "Carrie & Lowell is the seventh studio album by American musician Sufjan Stevens, released through Asthmatic Kitty on March 31, 2015. Unlike Stevens's previous studio album, the electronic The Age of Adz, Carrie & Lowell is sparsely instrumental and marks a return to the performer's indie folk roots. The album was given a one-week preview on NPR. The album was released to high critical acclaim, with many critics calling it one of Stevens' best."
    }, {
      id: 3,
      rank: 3,
      title: "I Love You, Honeybear",
      artist: "Father John Misty",
      releaseDate: "10/02/2015",
      albumCover: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Fjm-iloveyouhoneybear.jpg/600px-Fjm-iloveyouhoneybear.jpg",
      description: "I Love You, Honeybear is the second studio album by American folk musician Josh Tillman, the second under his pseudonym Father John Misty. It was released on February 9, 2015 in the UK and Europe on Bella Union, and in the rest of the world on February 10, 2015 on Sub Pop. Produced by both Tillman and Jonathan Wilson, this is Tillman's second studio album since his departure from Fleet Foxes. The album was also mixed by Phil Ek, and mastered by Greg Calbi at Sterling Sound. According to Tillman, the release is a concept album."
    }, {
      id: 4,
      rank: 4,
      title: "Currents",
      artist: "Tame Impala",
      releaseDate: "17/7/2015",
      albumCover: "https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Currents_artwork_%28Tame_Impala_album%29.jpg/600px-Currents_artwork_%28Tame_Impala_album%29.jpg",
      description: "Currents is the third studio album by Australian psychedelic rock act Tame Impala, released on 17 July 2015 on Interscope Records. Like the group's previous two albums, Currents was written, recorded, performed, and produced by primary member Kevin Parker. For the first time, Parker also mixed the music. After releasing the group's previous record, Lonerism (2012), Parker began work on Currents, largely recording at his home studio in Fremantle. He engrossed himself with writing and recording, and owing to his reputation as a musical auteur, labored over the details of each song, ultimately causing the release date to be delayed by two months. In contrast to the psychedelic rock sound of the project's prior work, Currents marks a shift to more dance-oriented music, with more emphasis placed on synthesizers than guitars. Parker was inspired to seek a change out of desire to hear Tame Impala's music played in dance clubs and a more communal setting. Thematically, the record is about the process of personal transformation, which many critics interpreted to be the result of a romantic break-up. The album's cover art depicting vortex shedding is a visualization of these themes."
    }, {
      id: 5,
      rank: 5,
      title: "Choose Your Weapon",
      artist: "Haitus Kaiyote",
      releaseDate: "04/05/2015",
      albumCover: "http://cdn.albumoftheyear.org/album/2015/30270-choose-your-weapon.jpg",
      description: "Choose Your Weapon is an neo soul album, that takes influence from a variety of genres including jazz, soul, R&B, West African funk, samba and latin with lyrics that touch upon themes of supernatural topics, technological subjects and death. Upon release Choose Your Weapon was met with universal acclaim from music critics, who praised the albums production and musical structure, and was named as one of the year’s best albums. Commercially Choose Your Weapon saw some success and debuted at number twenty two on the Australian albums chart."
    }];
  }
});
