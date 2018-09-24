webpackJsonp([34],{476:function(e,n){e.exports={title:"1.3.5 Release",description:"Web XP tracker, Clue scroll arrows, improved HiScore lookup, clue & bug fixes",author:"Kamielvf",__content:'<p>The new Web XP Tracker can now easily be accessed from within the client, simply click the &#39;Open xp tracker&#39; button or right click on one of the skill panels.\nShare your gains with your friends and clanmates!</p>\n<p><img src="/img/blog/1.3.5-Release/web-xp-tracker.png" alt="xptracker"/></p>\n<p>Thanks to <a href="https://github.com/deathbeam">@deathbeam</a> the clue scrolls will now point out the location, npc or object you have to go to for your current step when you are in the area!</p>\n<p><img src="/img/blog/1.3.5-Release/clue-arrows.gif" alt="cluearrows"/></p>\n<p>The motherlode overlay has been updated to show more information. You can now see the amount of gems received thanks to <a href="https://github.com/ypperlig">@ypperlig</a>.</p>\n<p><img src="/img/blog/1.3.5-Release/motherlode.png" alt="motherlode"/></p>\n<p>The HiScore lookup within the client now supports virtual levels and shows clue stats for each individual clue tier now.</p>\n<p><img src="/img/blog/1.3.5-Release/lookup.png" alt="lookup"/></p>\n<p>NPCs can now be tagged with either their hull or their tile, this makes it easy to see where you have to click to interact with the tagged NPC. <a href="https://github.com/raqes">@raqes</a></p>\n<p>For a list of all changes, see the list below.</p>\n<p>Enjoy!</p>\n<p>~ Kamiel</p>\n<h3 id="new-commits">New commits</h3>\n<p>We had 33 contributors this release!</p>\n<pre><code>Adam (17):\n      wsservice: move log messages to debug\n      item stats: add raids combat potions\n      item stats: fix sara brew\n      item stats: fix zammy brew\n      geplugin: add alt-click to bank items and bank inventory\n      slayer plugin: add several missing slayer tasks\n      Use built in player index field\n      bank value plugin: make calculator more testable\n      Fix bank value overflow\n      Add deferred eventbus for posting events on the next tick\n      Add item container changed event\n      runelite-api: add events for actor spawning and despawning\n      screenshot plugin: create screenshot folder on startup\n      screenshot plugin: remove unused import\n      ge search panel: show &quot;No results found&quot; if search is empty, clear on empty lookup\n      worldpoint: add dx/dy/dz methods\n      Add Angle and Direction\n\nAdenKenny (1):\n      Add challenge answer to Clocktower clue\n\nBart van Helvert (1):\n      More accurately draw tile indicators\n\nDennis (1):\n      fix bank placeholder release option\n\nFatalWaffles (7):\n      Fix worldpoint for mausoleum\n      Add 2nd emote for mausoleum clue\n      Fix barb agil and digsite emote clues\n      Fix referee cryptic clue\n      Fix &amp; add emote clues.\n      Add &quot;Teleport to Abyss&quot; to Menu Entry Swapper\n      Fix fight arena pub emote clue\n\nGamer1120 (1):\n      TRISTESSAS_TRAGEDY spelling error\n\nHypoxiaOSRS (1):\n      Fix shilo village and white wolf mountain hard clues\n\nhaakonrp (1):\n      menu swapper: swap reset on dismantled traps and lay on expired traps\n\nJack (1):\n      Fix XP Drop plugin recolouring ALL drops whenever a combat prayer is enabled\n\nJeremy Plsek (1):\n      tooltips: hug edge of screen instead of jumping\n\nKamiel (6):\n      Remove tags from highscore lookup\n      Set herbiboar and mlm overlays to draw ABOVE_SCENE\n      Move herbiboar minimap overlay to its own class\n      Fix cat chasing menu entry swap\n      Show grand exchange offer type on cancelled state\n      Change menuOpened from FieldHook to Hook\n\nLars \xd8rnlo (3):\n      Add upgraded sack to varbits (5556)\n      Some quality of life changes to the Motherlode Mine Plugin.\n      Added option that allows a player to see the number of gems found during the current mining session.\n\nLotto (7):\n      hiscore: lookup local player on double-click\n      hiscore: display levels above 99 in the panel\n      hiscore panel: fix clue/lms/bh breakage\n      hiscore panel: fix total level breakage\n      Revert &quot;hiscore panel: fix total level breakage&quot;\n      hiscore panel: fix not displaying total level correctly\n      cluescrolls: fix confusing solution text for Luthas\n\nMarcus Ramse (2):\n      Fix worldToMiniMap for locations outside of range\n      Change brother name color when killed\n\nMorgan Lewis (1):\n      Add object and location to a Ardougne armour shop clue\n\nNuno Rodrigues (1):\n      Fishing Plugin: Add new Lure fishing spots at Barbarian Village, Fix Karamja Spots\n\nOShadowz (2):\n      imp plugin: fix magpie impling name and spelling\n      imp plugin: add config option to display impling names on minimap\n\nOcelot (1):\n      clue scroll plugin: fix various clues with incorrect steps\n\nRaqes (1):\n      npc tag plugin: add option for highlight type and drawing names\n\nRichard Goodman (1):\n      Add more POH minimap overlays\n\nSeth (1):\n      ge plugin: Display spent price instead of original offer price\n\nShaunDreclin (2):\n      slayer plugin: add slayer target highlighting\n      Fix UnsupportedOperationException error in Slayer plugin\n\nSoyChai (1):\n      api: Add 1461 labelled sprites to SpriteId\n\nTomas Slusny (14):\n      Add link to web XP tracker to XP panel\n      Apply small font option only to dynamic overlays\n      Change magic imbue timer to 12 seconds\n      Swap also dismantle/reset on box traps\n      Universal warning message support in config\n      Make condition for H.A.M. pickpockets lowercase\n      Add clue hint arrows for clues\n      Set default offset to center of tile for arrows\n      Do not reuse HttpUrl.builder for building xp urls\n      Remove &quot;cast bloom&quot; swapping and make teleport off\n      Move reordering of items after shift-click\n      Hide clue scroll interface when no clue present\n      Fix layer of MotherlodeOverlay\n      Centralize setting of hint arrows for clues\n\nTrees (1):\n      Refactor FriendManager + Name\n\nTunnelsnake52 (1):\n      Fix Dance a jig under Shantay&#39;s Awning coords\n\nTyler Bochard (2):\n      Reduce player indicators overlay priority to MED\n      Prevent artifacts in stretched fixed mode\n\nraqes (1):\n      Alphabetize the config entries of the menu entry swapper plugin.\n\nnshusa (1):\n      Refactored some variables in NPCComposition\n\nnuno (2):\n      Add Corsair Cove net fishing spot\n      hunter plugin: fix salamander net display\n\nrichardbadman (1):\n      Fixes easy clue\n\nrune3132 (4):\n      Adds individual clue counts to highscore plugin\n      jewellery count plugin: add ring of recoil breaking notification\n      clue plugin: order map clues after type and id\n      clue plugin: fix/add various clues\n\nwinterdaze (1):\n      fix prayer enhance duration\n</code></pre>'}}});
//# sourceMappingURL=34.45c93a58.chunk.js.map