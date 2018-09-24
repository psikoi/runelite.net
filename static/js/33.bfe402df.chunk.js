webpackJsonp([33],{477:function(e,n){e.exports={title:"1.3.6 Release",description:"Tile marking, clue bugfixes, and entity hider",author:"Adam",__content:'<p>A tile marker plugin has been added which allows you to highlight arbitrary\ntiles by holding shift and selecting &quot;Mark&quot;. The markers are saved with your\nclient settings, and work even in instances.</p>\n<p><img src="/img/blog/1.3.6-Release/tilemarker.gif" alt="tilemarker"/></p>\n<p>Agility shortcuts throughout the game are now highlighted, and the agility\nplugin now highlights marks of grace:</p>\n<p><img src="/img/blog/1.3.6-Release/agilityshortcut.png" alt="agilityshortcut"/></p>\n<p>A fairy ring location plugin was added which tells you the location fairy rings\nare configured to:</p>\n<p><img src="/img/blog/1.3.6-Release/fairyring.png" alt="fairyring"/></p>\n<p>An entity hider plugin was added which lets you hide other players and npcs from\nview.</p>\n<p><img src="/img/blog/1.3.6-Release/entityhider.png" alt="entityhider"/></p>\n<p>There has been a large effort to fix and correct all of the clues from the\ncluescroll plugin. I expect a few more releases before it is solid, but it\nshould no longer point at random objects anymore.</p>\n<p>There are also several smaller improvements and bug fixes, including:</p>\n<ul>\n<li>Opponent info should no longer sometimes show &quot;null&quot; for opponent name</li>\n<li>The infoboxes now have a configurable wrap limit, and can be configured to\nstack verically instead.</li>\n<li>Support for slayer braclets have been added to the slayer plugin</li>\n<li>The MLM plugin now only shows veins on the same floor as you are</li>\n<li>Fix notes plugin to textwrap</li>\n<li>Add kingdom of misc. to screenshot plugin</li>\n<li>The length XP globes are shown is now configurable</li>\n<li>Fix client resizing itself when the plugin panel is collapsed and the client\nis maximized</li>\n<li>Color HP xp drops when praying too if XP drops are split</li>\n<li>&quot;Actions Left&quot; has been added to XP globes</li>\n</ul>\n<p>Enjoy!</p>\n<p>- Adam</p>\n<h3 id="new-commits">New commits</h3>\n<p>We had 26 contributors this release!</p>\n<pre><code>Adam (22):\n      ge plugin: use query runner for bank query\n      perspective: use LOCAL_COORD_BITS in getTileHeight and document that parameters are local coords\n      Remove unnecessary groupdIds that are equivalent to the parents\n      Rename runelite api artifact to runelite-api\n      Rename runescape api artifact to runescape-api\n      Change pushingpixels groupId to be under net/runelite\n      Update cache-server test to use cache 165 too\n      overlay renderer: fix npe when client is null\n      devtools: show instance location information\n      Add ground marker plugin\n      tile mixin: don&#39;t fire itemlayer change events when loading regions\n      update check service: set a lower connect timeout\n      Add command executed event\n      runescape-client: rename pendingVarbitChanges/Count\n      devtools plugin: add commands to get and set varbits\n      idle notifier plugin: use wildcard import for animation ids\n      runelite config: add position to config items\n      infobox overlay: Configure the amount of boxes per row\n      npc mixin: transform npc in getName/getCombatLevel/getId\n      npc indicators: fix npe building npcs\n      Revert &quot;Merge pull request #1886 from deathbeam/cleanup-sidebar&quot;\n      xp tracker service: fix deadlock acquiring connections\n\nCas van Dongen (1):\n      Slayer plugin: Added support for slayer bracelets.\n\nGabriel (2):\n      Fix and add a few medium clue steps\n      Fix anagram, cryptic and emote medium clues (#1876)\n\nGamer1120 (1):\n      Only render mining spots on same floor in MLM. Fixes #1642\n\nGrant Dellar (1):\n      Change JEditorPane to JTextArea\n\nHypoxiaOSRS (3):\n      screenshot plugin: add Kingdom screenshot\n      Add rune and addy dragon slayer icons (#1725)\n      Fix gnome agility arena emote clue\n\nH\xe5kon Rosseland Paulsen (1):\n      xpglobes: add duration of xp orbs in config\n\nInfinitay (2):\n      kingdom plugin: only show favour when in kingdom\n      Add fairy ring plugin\n\nJeremy Plsek (5):\n      clientui: don&#39;t update size if already maximized\n      geplugin: create input listener class\n      geplugin: replace default action when pressing alt\n      stretched mode: pass extended modifiers on click\n      Highlight agility shortcuts\n\nJeroen (2):\n      Added an idle notification for when crushing infernal eels.\n      Add support for colored HP xp drops if XP drops are split and a combat prayer is active\n\nJerwuQu (1):\n      Allow customization of barrows brother location colors\n\nJordan Atwood (1):\n      Fix Canifis emote clue\n\nKamiel (4):\n      Change regen meter arc position and size to match with orb background\n      Draw player indicator clan icon further away from player name\n      Add VarClientStr to api and rename VarClient to VarClientInt\n      Change ground marker plugin to use selected region tile coords instead of basing them off of mouse location\n\nLevi Schuck (1):\n      Sort Fishing spots by distance from camera\n\nLotto (2):\n      cluescroll-plugin: group item variants + display when to unequip items\n      Add entity hider plugin\n\nMantautas Jurksa (2):\n      cluescroll plugin: remove tags from clue text\n      Fix barbarian chest and abbot langley clue steps\n\nReasel (1):\n      Add dropdown for font style for in-game overlays\n\nRheon-D (1):\n      agility plugin: add highlighting for marks of grace\n\nRune Nielsen (3):\n      Clue plugin: fix easy and medium cryptic and emote clues (#1726)\n      IdleNotifierPlugin: Add big net fishing\n      IdleNotifier: Add infernal harpoon\n\nSamlof (1):\n      Add more travel menu swap options and claim slime swap\n\nSeth (3):\n      overlay util: remove white outline on minimap dots\n      barrows overlay: Reorder enum to match in game overlay/use full name\n      barrows overlay: Replace existing slain brother overlay with our own\n\nSomeZer0 (1):\n      Fix spirit tree cryptic clue step\n\nTomas Slusny (8):\n      Add back support for regular overload (NMZ)\n      Stronger visual indicators for MLM sack\n      Do not use object world locations\n      Make ObjectClueScroll extend LocationClueScroll\n      Fix runelite-client shading\n      Remove unnecessary code from GroundMarkerPlugin\n      Fix herbiboar performance/blinking\n      Cleanup sidebar expanding/closing\n\nTrees (1):\n      Add Sacred Eels and Barehand Fishing (#1857)\n\nValmir Memeti (1):\n      Add &quot;Actions left&quot; for Xp globes\n\nWooxSolo (2):\n      Fix cannon cannonball count\n      Fix 2 emote clues\n</code></pre>'}}});
//# sourceMappingURL=33.bfe402df.chunk.js.map