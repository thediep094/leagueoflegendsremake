import React from "react";
import Header from "../sections/Header";
import Footer from "../sections/Footer";
import "../styles/pages/New.scss";
const New = () => {
  const newData = {
    img: "https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltf9ab8329294529ab/64120951952945362ea1c4a8/Faerie-Court-Milio---Final.jpg",
    title: "DESIGNING MILIO: FRIENDS AND FLAMES",
    subtitle:
      "Game Designer Riot Emizery shares some background on how we landed on Milio’s abilities and gameplay.",
    author: "RIOT EMIZERY",
    tag: "dev",
    description: `<div"><p>Milio, the gentle flame, is excited to make friends on the Rift right away! We knew going into his design that we wanted a back-to-basics male enchanter that fit comfortably into the larger enchanter roster and used fire in an unconventional way to protect his allies. Over time, that built into the kit we have today which focuses on buffing, protecting, healing, and inspiring allies with rapid casting.</p><h1>Establishing Milio’s Niche</h1>
    <p>While we knew we wanted Milio to be an enchanter player’s enchanter, we also wanted his kit to be distinct and offer something new.</p>
    <p>Game designer Blake “Squad5” Smith came up with two unique core gameplay hooks—namely the attack range extension buff on Milio’s W and cleansing allies with his ultimate ability. These created tons of buzz and excitement around the office for a few reasons. Let’s talk about those particular spells and then get into our thinking behind the rest of his kit.</p><h2>Breath of Life</h2>
    <p>In creating Milio’s ultimate, we recognized that Mikael’s Blessing is powerful, but it’s niche—enchanters don’t often buy it. For players that just want to chill and support friends, an active item might be one too many keystrokes. And when you compound the need to click your ally while they’re still controlled by an enemy, it starts to skew things towards players that feel comfortable facerolling their keyboards.</p>
    <p>But what if you didn’t need to click anyone? Just press the button and your friends are instantly released. That was the dream, and wow, was it fun.</p>
    <p>People were loving the ability to free their friends up to dominate their enemies. Nothing is more satisfying for a Milio player than making Amumu cry by instantly cleansing when he hits a 4-man ultimate.</p>
    <p>But should Milio be able to deny Amumu his ultimate in every fight? That felt wrong. After all, mummies need moments, too. That’s why we decided that if Milio loses the ability to cast, say from a stun or silence, he shouldn’t get to break the rules and provide that cleanse. We also gave Breath of Life a long cooldown so there’s breathing room between fights and everyone feels like they get to play.</p><h2>Cozy Campfire</h2>
    <p>Milio’s W - Cozy Campfire introduces bonus attack range to the enchanter roster. This unlocks allies to target enemies at unexpected and sometimes ridiculous ranges, making both Milio and his friend feel powerful. Rioters began theory crafting: Caitlyn Snipes? Kog’Maw Spittle? Jinx Rockets? Aphelios Calibrium to the moon?!</p>
    <p>Early on, Cozy Campfire only gave attack speed and attack range. Caitlyn sure loved it but it wasn’t as satisfying for Milio’s mage buddies. So it felt natural to introduce healing to the mix, especially because the visuals on the spell always looked warm and encouraging.</p>
    <p>By then, the spell was doing <em>a lot</em>, which sparked many tests and debates over what should stay. Eventually, to decouple him from ADCs a bit and make him a friend to all, we kept the healing and got rid of his attack speed buff.</p>
    <p>Not only was it hot to have a HoT (heal over time) on Cozy Campfire, but enchanter items like Ardent Censer and Staff of Flowing Waters became <em>clearly</em> great purchases for Milio.</p><h2>Fired Up!</h2>
    <p>Milio’s Passive - Fired Up! lets him buff allies across the board. Just like how Lulu or Nami’s spells cast on allies grant unique boons, we knew Milio needed his own boons to give. Burns felt right given he’s a fire enchanter, and giving Milio a strong relationship with ADCs through their target-based attack damage scaling made him better friends with others and a bit less powerful as an independent damage dealer.</p>
    <p>At first this passive was integrated directly into his targeted support spell, E - Warm Hugs, as the ability has two charges. But fire spreads; It sticks to everything it touches. It’s relentless! So we added it to Cozy Campfire… and then Breath of Life… and why stop there? We added it to his Q, Ultra Mega Fire Kick too so that if you blast through an ally they also get the buff.</p>
    <p>A lot of effort went into making sure Fired Up! feels powerful without it becoming overpowered. Giving Milio so many options to apply his passive—and on so many people—meant we chose carefully how much damage it could deliver in team fights.</p>
    <p>Dividing the damage into two parts, AD scaling burst damage and his own AP scaling burn damage, allowed us to reduce the group efficacy by removing burn stacking. It’s surely better on more people, but the damage falls off a little from burns being replaced instead of piled on.</p><h2>Ultra Mega Fire Kick</h2>
    <p>We wanted to give Milio a fun spell (with a fun name) that had a kid’s energy imbued. His Q came to be as a way to include both a control spell that saves allies and a fun, bouncy spell that annoys enemies.</p>
    <p>Milio’s flying fuemigos are an extension of himself. Knocking back enemies made great sense as a defensive caster but we had concerns early on that it might be too strong. Let’s just say Milio’s Q was called the ‘Ixtal Death Ball’ in development.</p>
    <p>Fortunately for his opponents, we spent a lot of time figuring out how often Milio could cast Q and gave him some reasons to cast it in lane for aggression, leaving an opening for the opponent to run in after. This led to his shorter attack range and letting the knockback fly <em>extra</em> far back against minions.</p>
    <p>And just like that, Milio had a fun way to poke enemies while also giving them an opening to charge in.</p><h2>Warm Hugs</h2>
    <p>Milio’s E - Warm Hugs is a two-charge shield that temporarily increases an ally’s movement speed. We loved the rapid cast feeling and overall as a design team prefer using shields over heals when appropriate. Too much sustain can be really annoying to fight against and temporary health has more gameplay and timing involved.</p><h1><strong>Punishing The Punk</strong></h1>
    <p>Milio does have his weaknesses. He can feel like one of the most slippery champions on the Rift—but that’s intentional. He’s easy to execute if you can get your hands on him, but good luck catching that kid without slows on your team.</p>
    <p>Milio’s movement speed doesn’t come for free. His resists and health pool are intentionally low and if he’s casting to save himself, his team isn’t getting buffed. We found in internal testing that oftentimes a single champion can keep Milio off his team long enough to win a fight.</p>
    <p>Milio’s spell and attack ranges are intentionally a bit shorter than we would normally give to an enchanter. Sure, he loves to sit in the back and dole out buffs to his friends while being ignored, but that feels a bit unfair. We made it so Milio has to step into the fray a little bit to buff his front line and risk getting caught.</p>
    <p>Milio’s backline shenanigans can be frustrating, but don’t fret—there are some strong counters to his style of play.</p><h2>Hook and Line that Stinker</h2>
    <p>Milio’s a mid- to late-game champion, so shutting down his lane early and snowballing is a great strategy to prevent him from coming online. Now, that’s easier said than done, and typical engage champions may struggle to get on top of him and his ally, while some poke champions are stalled out by his healing and shielding.</p>
    <p>Bringing hook champions is a great solution for countering Milio’s laning phase. If he wants to poke with his ally using Cozy Campfire they’re both grabbable as they walk past the wave to harass. Milio gets popped quickly, so a single grab can easily shut him down.</p>
    <p>Jungle ganks are also a massive contributor to preventing his strength from accumulating. Milio’s great at disengaging against a single enemy, but if more than one jumps on him or an ally there’s only so much he can do about it with his Ultra Mega Fire Kick.</p>
    <p>Keep the pressure high and he’ll be stuck on the ground while his Nexus craters.</p><h1><strong>Easy to Learn, Hard to Master</strong></h1><p><a href="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltd109b0c2f5354721/641209cc4fd99f36ebe242f1/Milio3.png" target="_blank"><img data-image="twb90ygjasfs" src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltd109b0c2f5354721/641209cc4fd99f36ebe242f1/Milio3.png" data-sys-asset-uid="bltd109b0c2f5354721" alt="Milio3.png"></a></p>
    <p>A big goal in making an enchanter that feels like it fits in with their audience is to make sure they’re accessible. A lot of people like to duo with their skilled friends and just empower them and let them go wild.</p>
    <p>Every spell on Milio’s kit is meant to have easy execution in some form or another:</p><ul><li>Q - Ultra Mega Fire Kick is very reliable at close ranges and can hit with auto-targeting using minions</li><li>W - Cozy Campfire is a set it and forget it spell, even outside of combat, providing healing to friends in need. And if the wrong target was chosen it can be recast to follow a new friend</li><li>E - Warm Hugs has two charges so even if he messes up the first one he’s got another fuemigo in the backpack ready to go</li><li>R- Breath of Life heals, cleanses, and applies a tenacity buff, so as long as it’s used in combat he’s likely to get <em>some</em> successful result</li><li>Just by casting spells normally, Milio makes allies Fired Up! with his unique passive</li></ul><br><p>We don’t expect anyone to pick up this champion and mess up so much they ruin their friends’ games to the point they don’t want to play together anymore. Milio’s here to build bridges, not burn them down.</p><h2>Depth of the Furnacita</h2>
    <p>While that’s great, League of Legends is about skill expression and mastery. Once you’ve nailed the basics, we want depth of gameplay to keep you playing a champion. That’s why we applied a critical success model to Milio’s spells.</p>
    <p>Each spell has a high ceiling of best use cases that can be daunting to decipher on paper. Making Fired Up! apply with Ultra Mega Fire Kick was a big part of supporting this model, giving him interesting ways to line up shots and hit goals on allies and enemies alike.</p>
    <p>What’s better than just heals or attack range? Both! How about a bunch of teammates? How about you sweep that field through your whole team and give <em>everyone</em> your passive buff? Recasting Cozy Campfire to drag it through the team can be a powerful tool against elite monsters.</p>
    <p>No matter what’s going on there’s a high chance Milio will find a way to contribute meaningfully, but if you want to truly master the fire enchanter it’ll take some time and practice to reach new heights. But rest assured, this is a champion we want players new and old to climb with.</p><h2>Fun With Friends (And Fuemigos)</h2>
    <p>At the end of the day, Milio’s goal is to make his friends feel like they have superpowers. Just being there with your team and casting spells will already bring a lot to the table, but if you want to maximize your win rate then you’ll need to choose who you follow carefully. I’ll leave you with a couple of tips to maximize your firepower.</p>
    <p>During the lane phase, focus on staying alive and annoying your enemy by casting Cozy Campfire to secure opportune poke damage. When it’s safe, throw out an Ultra Mega Fire Kick to harass the enemy, and combine it with Warm Hugs to give your ADC movement speed and shields. Then they’ll be able to poke with their scaling attack damage thanks to Fired Up! A well-layered spell combo can get out 5 procs in 6 seconds and force enemies to retreat.</p>
    <p>In teamfights, try to drop his Cozy Campfire at the right time to give your ADC bonus attack range and safety in the backline. Keep enemies off them with your Ultra Mega Fire Kick, and when the enemy blows their big teamfight ultimate, turn the tables with Breath of Life.</p>
    <p>Get your allies in and out of the fight using Warm Hugs for movement speed and protection, doubling up if they really need the movement speed stacks. But be careful about overstepping, or your flame is likely to be snuffed out!</p>
    <p>Thanks for reading and we wish you the best of luck bringing the heat out on the rift!</p></div>`,
    date: "last month",
  };
  return (
    <div className="new">
      <Header />
      <div className="new-content">
        <div className="new__heading">
          <div className="new__heading-img-blur">
            <img src={newData.img} alt="" />
          </div>
          <div className="new__heading-info">
            <div className="new__heading-info-img">
              <img src={newData.img} alt="" />
            </div>
            <div className="new__heading-info-title">{newData.title}</div>
            <div className="new__heading-info-subtitle">{newData.subtitle}</div>
            <div className="new__heading-bottom">
              <div className="new__heading-date">{newData.date}</div>

              <div className="new__heading-author">
                <div className="new__heading-author-tag">{newData.tag}</div>
                <div className="new__heading-author-name">
                  <span>AUTHOR</span>
                  {newData.author}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="new__content-wrapper"
          dangerouslySetInnerHTML={{ __html: newData.description }}
        ></div>
      </div>
      <Footer />
    </div>
  );
};

export default New;
