webpackJsonp([20],{490:function(n,e){n.exports={title:"1.4.5 Release",description:"Inventory tags, opponent comparison, inventory viewer, and corporeal beast plugin",author:"Adam",__content:'<p>An inventory tag plugin was added which lets you tag items in your inventory,\nwhich then get outlined a specific color. Contributed by\n<a href="https://github.com/kulershk">@kulers</a>.</p>\n<p><img src="/img/blog/1.4.5-Release/inventorytags.png" alt="inventorytags"/></p>\n<p>The opponent info plugin now has an option to show and compare the stats of an\nopponent you interact with. Contributed by\n<a href="https://github.com/nightfirecat">@Nightfirecat</a>.</p>\n<p><img src="/img/blog/1.4.5-Release/playercomparison.png" alt="playercomparison"/></p>\n<p>An inventory viewer was added by <a href="https://github.com/jplsek">@jplsek</a> which lets\nyou overlay a view of your inventory:</p>\n<p><img src="/img/blog/1.4.5-Release/inventoryviewer.png" alt="inventoryviewer"/></p>\n<p>Finally, a corporeal beast plugin was added:</p>\n<p><img src="/img/blog/1.4.5-Release/corp.png" alt="corp"/></p>\n<p>There are also several smaller improvements and bug fixes, including:</p>\n<ul>\n<li>Fix animation smoother with interpolating rotation frames</li>\n<li>Fix animation smoother to not smooth hellhound defence animation</li>\n<li>Fix agility plugin to not reset arena timer when falling from obstacles</li>\n<li>Fix fight cave plugin to work more reliably</li>\n<li>Fix price of tentacle tridents</li>\n<li>Add informative dialog for when the client is outdated due to game updates</li>\n<li>Add configuration setting for chat commands clear chat keyboard shortcuts</li>\n<li>The screenshot plugin now has a configurable hotkey for screenshots</li>\n<li>Add Battle staffs to the idle notifier</li>\n<li>Add !clues chat command</li>\n<li>Add timer for stamina mixes</li>\n<li>Add (slayer) assignment to menu swapper</li>\n<li>Fix binding necklaces charges to reset when the necklace is destroyed</li>\n</ul>\n<p>Enjoy!</p>\n<p>- Adam</p>\n<h3 id="new-commits">New commits</h3>\n<pre><code>AWPH-I (1):\n      Add inventory viewer plugin\n\nAdam (20):\n      runelite-client: add outdated dialog\n      runescape-api: remove no longer used annotations\n      Add logback-parent to dependency management and use a consistent slf4j version everywhere\n      Add interface representing all callbacks the client does, and convert mixins to use it\n      hooks: dispose graphics after using\n      actor mixin: fix getInteracting when index is 65535\n      Add interacting changed event\n      chat message manager: set default colors for GAME messages\n      Add corporeal beast plugin\n      modelviewer: add basic animation support\n      devtools: add transform command\n      animation smoothing: do not interpolate to angle 0\n      Revert &quot;animation smoothing: do not interpolate to angle 0&quot;\n      animation smoothing: don&#39;t interpolate hellhound defence animation\n      chat commands: add config setting for chat clear shortcuts\n      cache: rename additional npc definition fields\n      queries: replace some isHidden checks with isSelfHidden\n      hiscore client: check response code of hiscore lookups\n      opponent info: move interacting logic to plugin and use interacting changed event\n      opponent info: add player comparison overlay\n\nDennis (1):\n      animation smoothing: fix angle bounds for rotation\n\nHSJ-OSRS (2):\n      Add battlestaff crafting to AnimationID\n      Add battlestaff crafting to idle notifier\n\nJames (1):\n      Show correct text for master clue command (#3989)\n\nJavaLeg (1):\n      chat commands: add clues command\n\nJordan Atwood (3):\n      Fix &quot;West of Barbarian Village&quot; hot-cold location\n      Fix East of Brimhaven fruit tree hot-cold location\n      timers plugin: Create timer for stamina mixes\n\nKamiel (1):\n      npc indicators: fix consuming tag menu clicks on non-npcs\n\nMax Weber (4):\n      runelite-client: Add Keybind class for configs to save and set hotkeys\n      screenshot plugin: Allow hotkey to be changed from insert\n      kourendlibrary: Make hiding the navbutton optional\n      runelite-client: Add a equals implementation to Keybind\n\nNathen (1):\n      Update library plugin encapsulation\n\nNathen Sample (1):\n      Update prayer plugin encapsulation (#3962)\n\nScottMCarr (1):\n      agility plugin: do not update arena timer when there is no hint arrow\n\nSu-Shing Chen (1):\n      agilityShortcutLocation: Fix SE Karamja agility marker\n\nTomas Slusny (24):\n      Center stretched fixed mode horizontally\n      Move onActorHitsplat to mixins\n      Move menuOpened to mixins\n      Move updateNpcs call to mixins\n      Move focusGained to mixins\n      Move focusLost to mixins\n      Move postItemComposition to mixins\n      Move setMessage to mixins\n      Move projectileMoved to mixins\n      Move addChatMessage to mixins\n      Move graphicsObjectCreated to mixins\n      Move drawAboveOverheads call to mixins\n      Move drawRegion call to mixins\n      Move clientMainLoop to mixins\n      Move menuActionHook to mixins\n      Add documentation for Hooks\n      Remove Age menu entry swapping\n      Move shift-click config to top of menu swapper\n      Update documentation for Callbacks interface\n      Add new toBufferedOutline method to SpritePixels\n      Add inventory tagging plugin\n      Remove title from corp panel\n      Make Fight Cave plugin more accurate\n      Fix price of tentacle tridents\n\nTrees (1):\n      Menu Swapper - Add Age/Assignment\n\nhoneyhoney (2):\n      Added destroy item widgets\n      Fixed binding necklace charges not being reset when necklace is destroyed\n</code></pre>'}}});
//# sourceMappingURL=20.3bc1ce83.chunk.js.map