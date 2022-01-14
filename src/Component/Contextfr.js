import React, { useState, createContext } from 'react'

export const Contextfr = createContext();

export const MainFunction = (props) => {

  const [Bollywood, setBollywood] = useState([
    {
      id: "0",
      title: "Vicky Kaushal",
      body: `One of the biopics that the actor has been signed for is to portray the character of the 
          revolutionary Udham Singh.`,
      catagory: "Bollywood",
      imgUrl: "https://filmfare.wwmindia.com/content/2021/feb/upcoming-biopic-vicky-kaushal-in-sardar-udham-singh-21612422996.jpg",
    },
    {
      id: "1",
      title: "Kangana Ranaut In Thalaivi",
      body: `has always thrived to break the glass ceiling and do roles that stay with you long after the film 
          .`,
      catagory: "Bollywood",
      imgUrl: "https://filmfare.wwmindia.com/content/2021/feb/upcoming-biopic-kangana-ranaut-in-thalaivi-31612423001.jpg",
    },
    {
      id: "2",
      title: " Parineeti Chopra In the Saina Nehwal Biopic",
      body: ` Ronnie Screwvala have joined hands for this big venture and we can hardly contain our eagerness`,
      catagory: "Bollywood",
      imgUrl: "https://filmfare.wwmindia.com/content/2021/feb/upcoming-biopic-parineeti-chopra-in-the-saina-nehwal-biopic-41612423007.jpg",
    },
    {
      id: "3",
      title: "Ishaan Khatter In Pippa",
      body: `Some big producers like Siddharth Roy Kapur and Ronnie Screwvala have joined hands for this big 
          venture and we can hardly contain our eagerness. `,
      catagory: "Bollywood",
      imgUrl: "https://filmfare.wwmindia.com/content/2021/feb/8upcomingbiopicstolookforwardtoinbollywood51612423013.jpg",
    },
    {
      id: "4",
      title: "Shabaash Mithu",
      body: `She has brought unfailing pride to the country and Taapsee is all set to bring her story live
           on the silver screen.`,
      catagory: "Bollywood",
      imgUrl: "https://filmfare.wwmindia.com/content/2021/feb/upcoming-biopic-taapsee-pannu-in-shabaash-mithu-61612423018.jpg",
    },
    {
      id: "5",
      title: "Bharat Ratna",
      body: `Harshaali rose to fame with her performance as Munni in the 2015 film Bajrangi Bhaijaan
          The story of Bajrangi Bhaijaan revolved around a Hanuman devotee`,
      catagory: "Bollywood",
      imgUrl: "https://stat1.bollywoodhungama.in/wp-content/uploads/2022/01/Bajrangi-Bhaijaan-fame-Harshaali-Malhotra-honoured-with-Bharat-Ratna-Dr.-Ambedkar-Award-dedicates-it-to-Salman-Khan-Kabir-Khan-Mukesh-Chhabra.jpeg"
    },
    {
      id: "6",
      title: "Marshal Sam Manekshaw",
      body: `This film had created a buzz as soon as Vicky Kaushal had released a few pictures of his look in the film last year.  `,
      catagory: "Bollywood",
      imgUrl: "https://filmfare.wwmindia.com/content/2021/feb/upcoming-biopic-vicky-kaushal-as-field-marshal-sam-manekshaw-71612423023.jpg",
    },
    {
      id: "0",
      title: "Apple's Mac shipment",
      body: `Apple's Mac lineup seems to be in huge demand, as the overall PC market also enjoys a bump in sales.`,
      catagory: "Technology",
      imgUrl: "https://techcrunch.com/wp-content/uploads/2020/11/2020-11-16-074419281.jpg"
    },
    {
      id: "1",
      title: "The AI software ",
      body: `Mr Mitchell is the founder and boss of a website and app called Boomy, which helps its users create their own songs using artificial intelligence (AI) software that does most of the heavy lifting`,
      catagory: "Technology",
      imgUrl: "https://cdn.pixabay.com/photo/2017/05/10/19/29/robot-2301646_960_720.jpg"
    },
    {
      id: "2",
      title: "5G Technology",
      body: `It is the next generation of cellular networks and services. It is expected to provide at least 20GBPS downlink`,
      catagory: "Technology",
      imgUrl: "https://d1jnx9ba8s6j9r.cloudfront.net/blog/wp-content/uploads/2021/01/5G-Technology-Top-10-trending-technologies-in-2021-edureka-min-1.png"
    },
    {
      id: "3",
      title: "Intelligent Automation",
      body: `Robotic Process Automation is basically the idea that Anything that can be automated, should be automated’.`,
      catagory: "Technology",
      imgUrl: "https://d1jnx9ba8s6j9r.cloudfront.net/blog/wp-content/uploads/2021/01/Intelligent-Process-Automation-Top-10-trending-technologies-in-2021-edureka.jpg"
    },
    {
      id: "4",
      title: "Big Data Analytics",
      body: `Big Data Analytics has been there in the market for quite some time now. More and more businesses are adopting it`,
      catagory: "Technology",
      imgUrl: "https://d1jnx9ba8s6j9r.cloudfront.net/blog/wp-content/uploads/2021/01/Big-Data-Analytics-Top-10-trending-technologies-in-2021-edureka-1.png"
    },
    {
      id: "5",
      title: "Human Augmentation",
      body: `Humans have continually experimented with technology to enhance life as they know it. This curiosity has now entered another territory`,
      catagory: "Technology",
      imgUrl: "https://d1jnx9ba8s6j9r.cloudfront.net/blog/wp-content/uploads/2021/01/Human-Augmentation-Top-10-trending-technologies-in-2021-edureka-min-1.png"
    },
    {
      id: "6",
      title: "Blockchain Cybersecurity",
      body: `It is a more modular, responsive security approach by centralizing orchestration and distributing enforcement.`,
      catagory: "Technology",
      imgUrl: "https://d1jnx9ba8s6j9r.cloudfront.net/blog/wp-content/uploads/2021/01/cybersecurity-Top-10-trending-technologies-in-2021-edureka-min-1-min.png"
    },
    {
      id: "0",
      title: "The Deer Hunter (1978)",
      body: `Talk about bleak victories... Michael Cimino's Vietnam drama may not be an uplifting film, but that's partly why it struck a chord with the Academy.`,
      catagory: "Hollywood",
      imgUrl: "https://cdn.mos.cms.futurecdn.net/tnVE6cvJ4oAZco9op3wujC-970-80.jpg.webp"
    },
    {
      id: "1",
      title: "Unforgiven (1992)",
      body: `You know how it goes. A cop on the verge of retirement is dragged into a life-changing case on his last day`,
      catagory: "Hollywood",
      imgUrl: "https://cdn.mos.cms.futurecdn.net/GYXSKC6tZtNDMVNZqf7h4N-970-80.jpg.webp"
    },
    {
      id: "2",
      title: "The Hurt Locker (2009)",
      body: `Before playing Hawkeye in the MCU, Jeremy Renner played William James in Kathryn Bigelow's Iraq drama The Heart Locker`,
      catagory: "Hollywood",
      imgUrl: "https://cdn.mos.cms.futurecdn.net/bGmouRpVMgPQuN6rbRKSFd-970-80.jpg.webp"
    },
    {
      id: "3",
      title: "Inside Job",
      body: `Learn in comprehensive, cogent detail about the pervasive and deep-rooted Wall Street corruption that led to the global economic meltdown`,
      catagory: "Hollywood",
      imgUrl: "https://m.media-amazon.com/images/M/MV5BZTg5YjE1YzktYjRmZC00Y2VjLThiMDItOTcwODRhMjRjZDQ1XkEyXkFqcGdeQXVyMTEzMTI1Mjk3._V1_.jpg"
    },
    {
      id: "4",
      title: "No Country For Old Men",
      body: `One of the Coen brothers' most ambitious efforts, No Country for Old Men plays like an updated western, ripe with dark, seedy undertones setting`,
      catagory: "Hollywood",
      imgUrl: "https://cdn.mos.cms.futurecdn.net/zvT38wuwGKaP76ex42vQdd-970-80.jpg.webp"
    },
    {
      id: "5",
      title: "The Bridge on the River Kwai ",
      body: `David Lean directs this excellent World War Two movie, reimagining the brutal enslavement of Allied prisoners forced to build the Burma railway`,
      catagory: "Hollywood",
      imgUrl: "https://cdn.mos.cms.futurecdn.net/LwtUMZp8ZDqXeBYxAN4x8-970-80.jpg.webp"
    },
    {
      id: "6",
      title: "Lord of the Rings",
      body: `There was no way the Academy could ignore Peter Jackson's Tolkien trilogy. A visually-adventurous tale of Hobbits`,
      catagory: "Hollywood",
      imgUrl: "https://cdn.mos.cms.futurecdn.net/EkUyeiQodLNkfu23tMaPw-970-80.jpg.webp"
    },
    {
      id: "0",
      title: "Novak Djokovic playing by his own rules",
      body: `The 34-year-old, a vaccine sceptic, fuelled widespread anger in Australia when he announced he was heading to Melbourne`,
      catagory:"Sports",
      imgUrl: "https://images.indianexpress.com/2021/06/tsitsipas-french-open.jpg?resize=600,334"
    },
    {
      id: "1",
      title: "Boxer Lovlina appointed as DSP",
      body: `An emotional Borgohain thanked the police department and affirmed that she will put in her best efforts `,
      catagory:"Sports",
      imgUrl: "https://images.indianexpress.com/2022/01/Untitled-design-2022-01-13T150121.314.jpg?resize=600,334"
    },
    {
      id: "2",
      title: "decision to deport Djokovic",
      body: `Djokovic is unvaccinated. His argument for an exemption is based on evidence that he was diagnosed with COVID-19`,
      catagory:"Sports",
      imgUrl: "https://images.indianexpress.com/2022/01/Djokovic-4.jpg?resize=600,334"
    },
    {
      id: "3",
      title: "India vs South Africa Test",
      body: `India vs South Africa 3rd Test Live Match Score, IND vs SA Cricket Match Live Scorecard`,
      catagory:"Sports",
      imgUrl: "https://images.indianexpress.com/2022/01/IND-vs-SA-3rd-Test-Day-3.jpg?resize=600,334"
    },
    {
      id: "4",
      title: "BCCIs Plan B",
      body: `It is learnt that in wake of the rising Covid count and increasing positivity rate, the BCCI secretary Jay Shah's office`,
      catagory:"Sports",
      imgUrl: "https://images.indianexpress.com/2021/03/ipl-2021-trophy.jpg"
    },
    {
      id: "5",
      title: "Bumrah breaks through Proteas",
      body: `After disappointment in Johannesburg, pace spearhead bounces back with 5-wicket haul in series decider.`,
      catagory:"Sports",
      imgUrl: "https://images.indianexpress.com/2022/01/Bumrah-5.jpg"
    },
    {
      id: "6",
      title: "Tasnim Mir",
      body: `Tasnim's feat has never been achieved by any Indian girl, including two-time Olympic medallist P V Sindhu`,
      catagory:"Sports",
      imgUrl: "https://images.indianexpress.com/2022/01/tasnim-mir.jpg?resize=600,334"
    },
    {
      id: "0",
      title: "Lay's Grew Potatoes",
      body: `The logo on each bag matches the NFL team that contributed soil to help make the good quality chips.`,
      catagory:"Food",
      imgUrl: "https://image.shutterstock.com/image-photo/potato-chips-bowl-beer-snacks-600w-1567647565.jpg"
    },
    {
      id: "1",
      title: "Bihar: Litti Chowkha",
      body: `Litti Chowkha is baked from wheat flour dough, stuffed with a mixture of roasted gram flour, spices and lemon juice`,
      catagory:"Food",
      imgUrl: "https://www.outlookindia.com/outlooktraveller/public/uploads/filemanager/images/litti-chowkha.jpg"
    }, {
      id: "2",
      title: "Goa: Fish Curry",
      body: `Xit Codi meaning curry rice is the deliciously tangy fish curry made with special spices, served with steamed rice or roti.`,
      catagory:"Food",
      imgUrl: "https://www.outlookindia.com/outlooktraveller/public/uploads/filemanager/images/fish-curry.jpg"
    }, {
      id: "3",
      title: "Maharashtra: Misal Pav",
      body: `Misal pav is a popular street food in Maharashtra. A great breakfast recipe that includes a curry made of sprouts`,
      catagory:"Food",
      imgUrl: "https://www.outlookindia.com/outlooktraveller/public/uploads/filemanager/images/misal-pav.jpg"
    }, {
      id: "4",
      title: "Makkidi Roti and Saag",
      body: `Makki di Roti is a corn meal Indian bread that tastes fabulous with ‘Sarson saag’ – mustard green and a glass of lassi.`,
      catagory:"Food",
      imgUrl: "https://www.outlookindia.com/outlooktraveller/public/uploads/filemanager/images/makki-de-roti.jpg"
    }, {
      id: "5",
      title: "Kosha Mangsho",
      body: `This Spicy Bengali Mutton Curry aka Kosha Mangsho is a perfect lunch recipe that would be loved by all.`,
      catagory:"Food",
      imgUrl: "https://www.outlookindia.com/outlooktraveller/public/uploads/filemanager/images/kosha-mangsho_5d3036c936254.jpg"
    }, {
      id: "6",
      title: "Fresh Dhokla",
      body: `Dhokla is a vegetarian dish made from a fermented batter of rice and split chickpeas. It is served with tangy chutneys `,
      catagory:"Food",
      imgUrl: "https://www.outlookindia.com/outlooktraveller/public/uploads/filemanager/images/dhokla.jpg"
    },
  ]);

  return (
    <div>
      <Contextfr.Provider value={[Bollywood, setBollywood]}>
        {props.children}
      </Contextfr.Provider>
    </div>
  )
}