webpackJsonp([10],{500:function(e,n){e.exports={title:"1.4.16 Release",description:"Layoutable Runescape widgets, top-center snap point, and automatic bounty target hiscore lookup",author:"Jordan",__content:'<p>RuneScape widgets are now layoutable, meaning they can be anchored to the overlay hotspots like\nRunelite overlays. Thanks to <a href="https://github.com/deathbeam">@Deathbeam</a> for this feature!</p>\n<p><img src="/img/blog/1.4.16-Release/layoutable-runescape-widgets.gif" alt="layoutable-runescape-widgets"/></p>\n<p>A top-center snap point has been added, and the XP Globes plugin has been set to use it by default,\nalso thanks to <a href="https://github.com/deathbeam">@Deathbeam</a>.</p>\n<p><img src="/img/blog/1.4.16-Release/top-center-snap-point.gif" alt="top-center-snap-point"/></p>\n<p>An option has been added to the hiscore plugin to automatically look up bounty targets when they are\nassigned, thanks to <a href="https://github.com/noelkeijzer">@noelkeijzer</a>.</p>\n<p>There are also several smaller improvements and bug fixes, including:</p>\n<ul>\n<li>Loot tracker now behaves correctly when multiple enemies die on same tick,\nwhen player is despawned and when receiving Theatre of Blood drops</li>\n<li>Some common items have been added to the ground item plugin&#39;s hidden items list by default</li>\n<li>The idle logout timer supports checking the logout timer when in combat</li>\n<li>The dense essence idle animation has been fixed and will correctly trigger the idle notifier</li>\n<li>The fossil island oxygen bar and pest control info widgets are now movable</li>\n<li>Some noisy plugin features have been disabled by default, or made to display only when in use</li>\n<li>&quot;Trade-with&quot; is now swapped also with the trade option of the menu entry swapper plugin</li>\n<li>Fixed the magic training arena dragonstone hint arrow not being cleared</li>\n<li>Prayer and run orb tooltips no longer display when the minimap is hidden</li>\n<li>The run energy tooltip now shows remaining energy when the orb shows run time remaining</li>\n<li>Some achievement diary requirements texts have been corrected</li>\n<li>Various skill calculator entries have been re-ordered to come in level requirement order</li>\n<li>Ourania teleport has been added to the skill calculator</li>\n<li>Fixed binding necklace charge counter when checking a necklace with one charge</li>\n</ul>\n<p>Enjoy!</p>\n<p>- Jordan</p>\n<h3 id="new-commits">New commits</h3>\n<p>We had 14 contributors this release!</p>\n<pre><code>Adam (2):\n      Revert &quot;Make same-tick same-tile loot event fire once&quot;\n      loot manager: limit to one kill per location per tick\n\nCC007 (1):\n      Fix locale not being applied for StackFormatterTest (#5216)\n\nMagic fTail (2):\n      Fix dense essence idle animation\n      Add support for combat idle 20 minute timer\n\nMax Weber (3):\n      cache: Do not depend on Index insertion ordering\n      cache: Properly produce `\\n` only on windows on jdk9+\n      Import Widget::fontId\n\nMichael Goodwin (4):\n      Make same-tick same-tile loot event fire once\n      Check for player HP being 0 in player loot event\n      Add common method for converting local to world point\n      Check for correct ToB region when receiving loot\n\nNo\xebl Keijzer (1):\n      Add automatic bounty hunter target lookup in HiScore plugin (#5193)\n\nSebastiaan Vanspauwen (1):\n      WidgetOverlay: Make fossil island oxygen bar moveable (#5246)\n\nShaun Dreclin (4):\n      Add clear button to var inspector devtool\n      Add trade-with swap to menu entry swapper\n      Fix ground markers getting set at wrong position\n      Fix mta dragonstone hint arrow not clearing\n\nTomas Slusny (12):\n      Make RuneScape widgets layoutable\n      Take preferred position into account when ordering\n      Add common hidden items to GroundItemsPlugin\n      Disable blast furnace clickboxes by default\n      Disable lit/unlit burner indicators by default\n      Make KourendLibrary overlay show only on interact\n      Show fishing overlays only when player can fish\n      Show cannon spot overlay only with cannon\n      Disable XP globes plugin by default\n      Add TOP_CENTER snap corner to snap center viewport\n      Make XP globes use TOP_CENTER snap point\n      Fix sorting order of overlays\n\nUnmoon (3):\n      Don&#39;t show prayer orb hover overlay if prayer orb is hidden\n      Don&#39;t show run energy hover overlay if run energy orb is hidden\n      Show run energy instead of time remaining if tooltip shows time remaining\n\nastaninger (7):\n      Fix watchtower Achievment Diary requirement (#5218)\n      Fix ape atoll Achievment Diary agility requirement (#5220)\n      Properly order prayer skill calculator (#5290)\n      Fix dragonstone necklace name in skill calculator (#5287)\n      Order tiaras in RC skill calc by experience gained (#5288)\n      Sort planks in construction guide by XP in skill calc (#5289)\n      Add ourania teleport to skill calculator (#5285)\n\nltvill (1):\n      Fix formatting of &#39;s in OSRS location names\n\noplosthee (1):\n      runecraft: fix binding necklace regex\n\nraiyni (5):\n      Widgets: add setItemId\n      widget: add setItemQuantity\n      widgets: setBorderThickness\n      expose text shadowed\n      Make pest control widgets layoutable\n</code></pre>'}}});
//# sourceMappingURL=10.2a955ecb.chunk.js.map