//=============================================================================
// VisuStella MZ - Visual Parallaxes
// VisuMZ_4_VisualParallaxes.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_4_VisualParallaxes = true;

var VisuMZ = VisuMZ || {};
VisuMZ.VisualParallaxes = VisuMZ.VisualParallaxes || {};
VisuMZ.VisualParallaxes.version = 1.10;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 4] [Version 1.10] [VisualParallaxes]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Visual_Parallaxes_VisuStella_MZ
 * @orderAfter VisuMZ_0_CoreEngine
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * By default, RPG Maker MZ only allows each map to have one parallax. Such a
 * limit makes it difficult to create different layers of objects to portray
 * distance and the like. This plugin will remedy that by allowing you to add
 * an unlimited amount of parallaxes per map alongside many controls to make
 * the parallaxes more vivid.
 * 
 * A restricted parallax area system is also added to this plugin to make
 * parallaxes appear only within certain regions and/or terrain tags. This way,
 * you can utilize parallaxes as masked layers for water surfaces and the like.
 * 
 * To make the most out of this, with the tilesets are formatted properly,
 * reflective water and reflective solid surfaces are also new effects added
 * through this plugin. Water effects will show ripples while reflective solid
 * surfaces are static.
 *
 * Features include all (but not limited to) the following:
 * 
 * * Add, change, and/or remove parallaxes through map notetags.
 * * Lots of customization options for each of the parallaxes.
 * * Limit where parallaxes can be displayed on the map through regions and/or
 *   terrain tags.
 * * Create reflective surfaces for water and solid ground as long as the
 *   tilesets have been formatted properly.
 * * Use Plugin Commands midway through the game to add, change, fade, and/or
 *   remove parallaxes as needed.
 *
 * ============================================================================
 * Requirements
 * ============================================================================
 *
 * This plugin is made for RPG Maker MZ. This will not work in other iterations
 * of RPG Maker.
 *
 * ------ Recommended Plugin List ------
 *
 * * Pixi JS Filters*
 *
 * This plugin recommends the above listed plugins to be installed inside your
 * game's Plugin Manager list in order to work. You can use this plugin without
 * it, but there will be features missing.
 * 
 * *Note* You can download the Pixi JS Filters plugin library from the below
 * URL or from the Action Sequence Impact product page. Install it as a
 * Tier 0 plugin.
 * 
 * *Note2* Pixi JS Filters perform differently on different machines/devices.
 * Please understand that this is outside of VisuStella's control.
 * 
 * URL: https://filters.pixijs.download/v3.1.0/pixi-filters.js
 *
 * ------ Tier 4 ------
 *
 * This plugin is a Tier 4 plugin. Place it under other plugins of lower tier
 * value on your Plugin Manager list (ie: 0, 1, 2, 3, 4, 5). This is to ensure
 * that your plugins will have the best compatibility with the rest of the
 * VisuStella MZ library.
 *
 * ============================================================================
 * Major Changes
 * ============================================================================
 *
 * This plugin adds some new hard-coded features to RPG Maker MZ's functions.
 * The following is a list of them.
 *
 * ---
 *
 * Parallaxes
 * 
 * The map editor's inherent parallax will remain untouched and unable to
 * utilize the extra features provided by this plugin. However, you can just
 * simply create a new parallax layer over it and hide it from view if needed.
 * 
 * Each of the parallaxes added through this plugin's notetags and/or commands
 * are assigned an ID. Referring back to the ID later will allow you to update
 * and/or remove that parallax when needed.
 * 
 * The new parallaxes are created on a separate layer from the map editor's
 * parallax and isn't included with the new parallaxes. Layers with higher ID's
 * will appear above layers with lower ID's.
 * 
 * However, other than that, all of the new parallaxes follow the same rules as
 * the map editor's parallax. This means that they will not appear above the
 * tile map and require transparent tiles to be seen. They will also scroll the
 * same way the original parallax does to provide consistency.
 *
 * ---
 * 
 * Regions and Terrain Tags
 * 
 * If you don't want a parallax to appear for the whole entire background and
 * want to confine them to certain areas of the map, you can assign regions or
 * terrain tags for them to appear in.
 * 
 * Only the parts of the map marked by the designated regions and/or terrain
 * tags will reveal the parallax. Those parts will be little squares each,
 * equal to the size of a tile. They have hard borders and do not have any
 * smoothing options in order to display the parallax tiles accurately.
 * 
 * Each parallax layer can have their own custom regions and/or terrain tags to
 * appear in. These can be adjusted through the notetag settings or through the
 * Plugin Commands provided by this plugin. Parallax layers can be limited to
 * multiple regions and/or terrain tags at the same time.
 * 
 * WARNING: This will cause longer load times on larger maps and affect their
 * performance. We highly recommend that you don't use this feature on maps
 * larger than 120 tiles wide or tall. However, this value can vary from device
 * to device.
 * 
 * ---
 * 
 * Reflections
 * 
 * In order to use reflections, you need to use tiles that are semi-transparent
 * or fully transparent. For example, water reflections need to come from tiles
 * that have been modified to be semi-transparent or fully transparent. If the
 * tile is completely opaque, the reflection will not show through. This rule
 * also applies to ground surfaces.
 * 
 * By default, water-based reflections are assigned the Terrain Tag 1 and solid
 * ground reflections are assigned the Terrain Tag 2. In order to make water
 * tiles show water reflections, you need to mark their tiles in the database's
 * tilesets with 1's. To mark reflective ground surfaces, mark them with 2's.
 * If the tiles are not tagged properly, the reflections will not be shown.
 * 
 * In the Plugin Parameters and notetags, you can decide if the reflections
 * will appear above the parallaxes or below them. By default, they will appear
 * above them. However, if you change them to appear below the parallaxes, then
 * pay attention to the opacity level of the parallaxes. If the parallaxes are
 * too opaque, you will barely see the reflection.
 * 
 * Once again, both water and ground tiles need to be semi-transparent or fully
 * transparent in order for reflections to be seen.
 * 
 * WARNING: This will cause longer load times on larger maps and affect their
 * performance. We highly recommend that you don't use this feature on maps
 * larger than 120 tiles wide or tall. However, this value can vary from device
 * to device.
 * 
 * ---
 * 
 * Not For Battle
 * 
 * For clarification, the VisuStella MZ Visual Parallaxes plugin is NOT made
 * for battle. There's a separate plugin for that called Visual Battle
 * Environment. The reason why parallaxes aren't made for battle is because the
 * way parallaxes are handled in map vary from how they would be handled in
 * battle. Using the Visual Parallax Plugin Commands will only alter the
 * parallax appearances when the player finishes battle.
 * 
 * ---
 *
 * ============================================================================
 * Extra Features
 * ============================================================================
 *
 * There are some extra features found if other VisuStella MZ plugins are found
 * present in the Plugin Manager list.
 *
 * ---
 *
 * Pixi JS Filters
 *
 * If the game project has Pixi JS Filters installed, then water reflections
 * will have a ripple effect. This is based off the Pixi JS ReflectionFilter
 * and will follow their rules. There are a couple of settings that can be
 * adjusted to customize the reflective properties.
 * 
 * Boundary: Vertical position of the reflection point, default is 50% (middle)
 * smaller numbers produce a larger reflection, larger numbers produce a
 * smaller reflection. This also means that reflections closer to the edges
 * will also have a different visual ripple effect than those towards the
 * middle of the reflection.
 * 
 * Amplitude: Starting and ending amplitude of waves allows you to control the
 * intensity of the reflection ripples. Use larger numbers for more intensity.
 * You have control over the values for the start and end values.
 * 
 * Wavelength: Starting and ending wavelength values determine the size of the
 * ripples for the reflection filter. Use larger numbers for larger wave sizes.
 * You have control over the values for the start and end values.
 *
 * ---
 *
 * ============================================================================
 * Notetags
 * ============================================================================
 *
 * The following are notetags that have been added through this plugin. These
 * notetags will not work with your game if this plugin is OFF or not present.
 *
 * ---
 * 
 * === Parallax-Related Notetags ===
 * 
 * ---
 *
 * <Parallax id Settings>
 *  Name: filename
 *  optional property
 *  optional property
 *  optional property
 * </Parallax id Settings>
 *
 * - Used for: Map Notetags
 * - Creates a regular parallax layer for this map by default.
 * - Replace 'id' with a number value to assign to the parallax.
 *   - Plugin Commands will refer to this ID for changes and removal.
 * - The 'Name' setting is required. Without it, no parallax will be made.
 *   - Replace 'filename' with the filename of the image you want to use as
 *     a parallax found in the game project's img/parallaxes/ folder.
 *   - Do not include the file extension.
 * - Insert as many of the optional properties as you want. You can find a list
 *   of them in the section below.
 *
 * ---
 *
 * <Water Parallax id Settings>
 *  Name: filename
 *  optional property
 *  optional property
 *  optional property
 * </Water Parallax id Settings>
 *
 * - Used for: Map Notetags
 * - Creates a water-based parallax layer for this map by default.
 *   - This will utilize the water reflection properties and will only appear
 *     on water-marked regions and terrain tags.
 * - Replace 'id' with a number value to assign to the parallax.
 *   - Plugin Commands will refer to this ID for changes and removal.
 * - The 'Name' setting is required. Without it, no parallax will be made.
 *   - Replace 'filename' with the filename of the image you want to use as
 *     a parallax found in the game project's img/parallaxes/ folder.
 *   - Do not include the file extension.
 * - Insert as many of the optional properties as you want. You can find a list
 *   of them in the section below.
 * - WARNING: This WILL cause longer load times on larger maps.
 *
 * ---
 *
 * <Solid Parallax id Settings>
 *  Name: filename
 *  optional property
 *  optional property
 *  optional property
 * </Solid Parallax id Settings>
 *
 * - Used for: Map Notetags
 * - Creates a solid-based parallax layer for this map by default.
 *   - This will utilize the solid reflection properties and will only appear
 *     on solid-marked regions and terrain tags.
 * - Replace 'id' with a number value to assign to the parallax.
 *   - Plugin Commands will refer to this ID for changes and removal.
 * - The 'Name' setting is required. Without it, no parallax will be made.
 *   - Replace 'filename' with the filename of the image you want to use as
 *     a parallax found in the game project's img/parallaxes/ folder.
 *   - Do not include the file extension.
 * - Insert as many of the optional properties as you want. You can find a list
 *   of them in the section below.
 * - WARNING: This WILL cause longer load times on larger maps.
 *
 * ---
 * 
 * -=-=- Optional Properties -=-=-
 * 
 * Replace the 'optional property' segment of the notetags above with any of
 * the text below to acquire their effects. You can add/remove as many of the
 * optional properties as you need.
 * 
 * ---
 * 
 * Horz Scroll: x
 * Vert Scroll: y
 * 
 * - This enables horizontal or vertical scrolling for the parallax.
 * - Replace 'x' or 'y' with a Number value to determine how fast they will
 *   scroll across the screen.
 * - Use a negative value to make them scroll the other way.
 * - These effects are mutually exclusive from the "Map Locked" property.
 * 
 * ---
 * 
 * Map Locked
 * 
 * - This will cause the parallax to only scroll when the map scrolls.
 * - This has the same effect as naming a parallax with "!" in front of
 *   its filename.
 * - If the filename used for this parallax has "!" in front of it, the
 *   Map Locked effect will be automatically turned on.
 * - These effect is mutually exclusive from the "Horz Scroll" and
 *   "Vert Scroll" properties.
 * 
 * ---
 * 
 * Opacity: x
 * Opacity: x%
 * 
 * - Changes the opacity level of the parallax.
 * - Replace 'x' with a number from 0 to 255 representing the opacity level.
 * - Replace 'x%' with a percentage from 0% to 100% representing the opacity.
 * 
 * ---
 * 
 * Blend Mode: Normal
 * Blend Mode: Additive
 * Blend Mode: Multiply
 * Blend Mode: Screen
 * 
 * - Sets the blend mode for the icon on the parallax.
 * - Use only one of the above.
 * 
 * ---
 * 
 * Hue: x
 * Hue Shift: x
 * 
 * - Changes the hue of the parallax to 'x' so that you don't need to create
 *   multiple copies of the files with different colors.
 * - Replace 'x' with a number value between 0 and 360.
 * - If the "Hue Shift" property is also used, then adjust the hue of the
 *   parallax each frame by 'x' amount.
 *   - 'x' can be positive or negative.
 * 
 * ---
 * 
 * Color Tone: red, green, blue, gray
 * 
 * - Changes the color tone or tint of the parallax.
 * - Replace 'red', 'green', 'blue' with a value between -255 and 255.
 * - Replace 'gray' with a value between 0 and 255.
 * 
 * ---
 * 
 * Region: id
 * Regions: id, id, id
 * 
 * - Forces the parallax to only become visible on tiles marked regions with a
 *   matching ID (alongside valid terrain tags).
 * - If this isn't used, then the parallax will be as large as the screen.
 * - Replace 'id' with a region ID between 1 and 255.
 *   - Region 0 is ignored and will not work.
 * - Insert multiple ID's to mark more tiles the parallax can appear on.
 * - WARNING: This WILL cause longer load times on larger maps.
 * 
 * ---
 * 
 * Terrain Tag: id
 * Terrain Tags: id, id, id
 * 
 * - Forces the parallax to only become visible on tiles marked terrain tags
 *   with a matching ID (alongside valid regions).
 * - If this isn't used, then the parallax will be as large as the screen.
 * - Replace 'id' with a terrain tag ID between 1 and 7.
 *   - Terrain tag 0 is ignored and will not work.
 * - Insert multiple ID's to mark more tiles the parallax can appear on.
 * - WARNING: This WILL cause longer load times on larger maps.
 * 
 * ---
 * 
 * === Event Reflection-Related Notetags ===
 * 
 * ---
 *
 * <No Reflection>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - This will cause the event to not show any reflection on reflective tiles.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 * 
 * === Reflection-Related Notetags ===
 * 
 * In order to use reflections, you need to use tiles that are semi-transparent
 * or fully transparent. For example, water reflections need to come from tiles
 * that have been modified to be semi-transparent or fully transparent. If the
 * tile is completely opaque, the reflection will not show through. This rule
 * also applies to ground surfaces.
 * 
 * ---
 *
 * <Water Reflection Region: id>
 * <Water Reflection Regions: id, id, id>
 *
 * <Solid Reflection Region: id>
 * <Solid Reflection Regions: id, id, id>
 *
 * - Used for: Map Notetags
 * - Sets the tiles marked by the region ID's to become reflective.
 * - This will override the Plugin Parameter settings for this map.
 *   - This does not add upon them.
 * - Replace 'id' with a region ID between 1 and 255.
 *   - Region 0 is ignored and will not work.
 * - Insert multiple ID's to mark more tiles the parallax can appear on.
 * - If these tags aren't used, refer to the settings found in the Plugin
 *   Parameter defaults.
 * - WARNING: This WILL cause longer load times on larger maps.
 *
 * ---
 *
 * <Water Reflection Terrain Tag: id>
 * <Water Reflection Terrain Tags: id, id, id>
 *
 * <Solid Reflection Terrain Tag: id>
 * <Solid Reflection Terrain Tags: id, id, id>
 *
 * - Used for: Map Notetags
 * - Sets the tiles marked by the terrain tag ID's to become reflective.
 * - This will override the Plugin Parameter settings for this map.
 *   - This does not add upon them.
 * - Replace 'id' with a terrain tag ID between 1 and 7.
 *   - Terrain Tag 0 is ignored and will not work.
 * - Insert multiple ID's to mark more tiles the parallax can appear on.
 * - If these tags aren't used, refer to the settings found in the Plugin
 *   Parameter defaults.
 * - WARNING: This WILL cause longer load times on larger maps.
 *
 * ---
 * 
 * <No Reflections>
 * 
 * - Used for: Map Notetags
 * - Disable water and map reflections on the current map.
 * 
 * ---
 *
 * <Water Reflection Top>
 * <Water Reflection Bottom>
 *
 * <Solid Reflection Top>
 * <Solid Reflection Bottom>
 *
 * - Used for: Map Notetags
 * - This will put the reflection layer either above all of the newly added
 *   parallaxes or below them.
 *   - If placed below, the reflection layer will not appear below the map
 *     editor's parallax layer.
 *   - If you change them to appear below the parallaxes, then pay attention to
 *     the opacity level of the parallaxes. If the parallaxes are too opaque,
 *     you will barely see the reflection.
 * - If these tags aren't used, refer to the settings found in the Plugin
 *   Parameter defaults.
 *
 * ---
 *
 * <Water Reflection Blur: x>
 * 
 * <Solid Reflection Blur: x>
 *
 * - Used for: Map Notetags
 * - Changes how much the water/solid tiles will blur the reflection for
 *   this map.
 * - Replace 'x' with a decimal Number value. Use a number between 0 and 1 for
 *   the best results.
 * - If these tags aren't used, refer to the settings found in the Plugin
 *   Parameter defaults.
 *
 * ---
 *
 * <Water Reflection Opacity: x>
 * <Water Reflection Opacity: x%>
 * 
 * <Solid Reflection Opacity: x>
 * <Solid Reflection Opacity: x%>
 *
 * - Used for: Map Notetags
 * - Changes the opacity level of the tile's reflection.
 * - Replace 'x' with a number from 0 to 255 representing the opacity level.
 * - Replace 'x%' with a percentage from 0% to 100% representing the opacity.
 * - If these tags aren't used, refer to the settings found in the Plugin
 *   Parameter defaults.
 *
 * ---
 * 
 * <Water Reflection Boundary: x>
 *
 * <Water Reflection Amplitude: start, end>
 * 
 * <Water Reflection Wavelength: start, end>
 *
 * - Used for: Map Notetags
 * - Requires Pixi JS Filters installed for the game project.
 * - These settings adjust the water reflection's ripple intensity.
 * - Replace Boundary's 'x' with a number value between 0 and 1.
 *   - Vertical position of the reflection point, default is 50% (middle)
 *     smaller numbers produce a larger reflection, larger numbers produce a
 *     smaller reflection. This also means that reflections closer to the edges
 *     will also have a different visual ripple effect than those towards the
 *     middle of the reflection.
 * - Replace Amplitude's 'start' and 'end' with number values representing how
 *   much to alter the intensity by.
 *   - Starting and ending amplitude of waves allows you to control the
 *     intensity of the reflection ripples.
 *   - Use larger numbers for more intensity.
 * - Replace Wavelength's 'start' and 'end' with number values representing the
 *   wave size.
 *   - Starting and ending wavelength values determine the size of the ripples
 *     for the reflection filter.
 *   - Use larger numbers for larger wave sizes.
 *
 * ---
 *
 * ============================================================================
 * Plugin Commands
 * ============================================================================
 *
 * The following are Plugin Commands that come with this plugin. They can be
 * accessed through the Plugin Command event command.
 *
 * ---
 * 
 * === Parallax Plugin Commands ===
 * 
 * ---
 *
 * Parallax: Add/Change Settings
 * - Add/Change settings for target parallax.
 * - Does not alter the map editor's parallax.
 *
 *   Required:
 *
 *     ID:
 *     - What is the ID of this parallax to be added/changed?
 *
 *     Filename:
 *     - What is the filename of the parallax?
 *
 *     Type:
 *     - What kind of parallax is this going to be?
 *     - Normal
 *     - Water
 *     - Solid
 * 
 *   Optional Settings:
 * 
 *     Scrolling:
 *
 *       Map Lock?:
 *       - Lock the parallax to the map's scrolling?
 *       - Automatically enable if the filename starts with "!"
 *
 *       Loop Horizontally?:
 *       - Loop the parallax horizontally?
 *       - Does not work with Map Lock enabled.
 *
 *         Scroll:
 *         - What is the horizontal scroll speed?
 *         - Use a negative value to invert the direction.
 *
 *       Loop Vertically?:
 *       - Loop the parallax vertically?
 *       - Does not work with Map Lock enabled.
 *
 *         Scroll:
 *         - What is the vertical scroll speed?
 *         - Use a negative value to invert the direction.
 * 
 *     Appearance:
 *
 *       Opacity:
 *       - What is the opacity level for this parallax?
 *       - You may use JavaScript code.
 *
 *       Blend Mode:
 *       - What kind of blend mode do you wish to apply to the parallax?
 *       - You may use JavaScript code.
 *         - Normal
 *         - Additive
 *         - Multiply
 *         - Screen
 *
 *       Hue:
 *       - Do you wish to adjust this parallax's hue?
 *       - You may use JavaScript code.
 *
 *       Hue Shift:
 *       - How much do you want the hue to shift each frame?
 *       - You may use JavaScript code.
 *
 *       Color Tone:
 *       - What tone do you want for the parallax?
 *       - Format: [Red, Green, Blue, Gray]
 * 
 *     Location:
 *
 *       Regions:
 *       - Which regions will show this parallax?
 *       - Does not work with 0. Leave empty to ignore.
 *
 *       Terrain Tags:
 *       - Which terrain tags will show this parallax?
 *       - Does not work with 0. Leave empty to ignore.
 *
 * ---
 * 
 * Parallax: Fade Opacity
 * - Fades the target parallax(es) opacity to a different value.
 * 
 *   ID(s):
 *   - Target which parallax(es)?
 *   - Cannot target the map editor's parallax.
 * 
 *   Target Opacity:
 *   - What opacity level to this value (0-255).
 *   - You may use JavaScript code to determine the value.
 * 
 *   Duration:
 *   - How many frames should this change take?
 *   - You may use JavaScript code to determine the value.
 * 
 * ---
 *
 * Parallax: Remove
 * - Removes target parallax(es).
 *
 *   ID(s):
 *   - Remove which parallax(es)?
 *   - Cannot remove the map editor's parallax.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Water Reflection Settings
 * ============================================================================
 *
 * These are the default settings for water-based reflections.
 *
 * ---
 *
 * Markers
 * 
 *   Regions:
 *   - By default, which regions by default apply this reflection?
 *   - 0 is ignored.
 * 
 *   Terrain Tags:
 *   - By default, which terrain tags by default apply this reflection?
 *   - 0 is ignored.
 *
 * ---
 *
 * Positioning
 * 
 *   Above Parallaxes?:
 *   - Place water reflections above visual parallaxes?
 *
 * ---
 *
 * Appearance
 * 
 *   Blur Rate:
 *   - How much do you wish to blur this reflection?
 *   - Use a decimal number between 0 and 1.
 * 
 *   Opacity:
 *   - What is the default opacity for this reflection?
 *   - Use a value between 0 and 255.
 * 
 *   Water Boundary:
 *   - At which point is the water boundary?
 *   - Use a decimal number between 0 and 1.
 * 
 *   Amplitude Start:
 *   - What should be the starting amplitude value?
 * 
 *   Amplitude End:
 *   - What should be the ending amplitude value?
 * 
 *   Wavelength Start:
 *   - What should be the starting wavelength value?
 * 
 *   Wavelength End:
 *   - What should be the ending wavelength value?
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Solid Reflection Settings
 * ============================================================================
 *
 * These are the default settings for solid ground reflections.
 *
 * ---
 *
 * Markers
 * 
 *   Regions:
 *   - By default, which regions by default apply this reflection?
 *   - 0 is ignored.
 * 
 *   Terrain Tags:
 *   - By default, which terrain tags by default apply this reflection?
 *   - 0 is ignored.
 *
 * ---
 *
 * Positioning
 * 
 *   Above Parallaxes?:
 *   - Place water reflections above visual parallaxes?
 *
 * ---
 *
 * Appearance
 * 
 *   Blur Rate:
 *   - How much do you wish to blur this reflection?
 *   - Use a decimal number between 0 and 1.
 * 
 *   Opacity:
 *   - What is the default opacity for this reflection?
 *   - Use a value between 0 and 255.
 *
 * ---
 *
 * ============================================================================
 * Terms of Use
 * ============================================================================
 *
 * 1. These plugins may be used in free or commercial games provided that they
 * have been acquired through legitimate means at VisuStella.com and/or any
 * other official approved VisuStella sources. Exceptions and special
 * circumstances that may prohibit usage will be listed on VisuStella.com.
 * 
 * 2. All of the listed coders found in the Credits section of this plugin must
 * be given credit in your games or credited as a collective under the name:
 * "VisuStella".
 * 
 * 3. You may edit the source code to suit your needs, so long as you do not
 * claim the source code belongs to you. VisuStella also does not take
 * responsibility for the plugin if any changes have been made to the plugin's
 * code, nor does VisuStella take responsibility for user-provided custom code
 * used for custom control effects including advanced JavaScript notetags
 * and/or plugin parameters that allow custom JavaScript code.
 * 
 * 4. You may NOT redistribute these plugins nor take code from this plugin to
 * use as your own. These plugins and their code are only to be downloaded from
 * VisuStella.com and other official/approved VisuStella sources. A list of
 * official/approved sources can also be found on VisuStella.com.
 *
 * 5. VisuStella is not responsible for problems found in your game due to
 * unintended usage, incompatibility problems with plugins outside of the
 * VisuStella MZ library, plugin versions that aren't up to date, nor
 * responsible for the proper working of compatibility patches made by any
 * third parties. VisuStella is not responsible for errors caused by any
 * user-provided custom code used for custom control effects including advanced
 * JavaScript notetags and/or plugin parameters that allow JavaScript code.
 *
 * 6. If a compatibility patch needs to be made through a third party that is
 * unaffiliated with VisuStella that involves using code from the VisuStella MZ
 * library, contact must be made with a member from VisuStella and have it
 * approved. The patch would be placed on VisuStella.com as a free download
 * to the public. Such patches cannot be sold for monetary gain, including
 * commissions, crowdfunding, and/or donations.
 * 
 * 7. If this VisuStella MZ plugin is a paid product, all project team members
 * must purchase their own individual copies of the paid product if they are to
 * use it. Usage includes working on related game mechanics, managing related
 * code, and/or using related Plugin Commands and features. Redistribution of
 * the plugin and/or its code to other members of the team is NOT allowed
 * unless they own the plugin itself as that conflicts with Article 4.
 * 
 * 8. Any extensions and/or addendums made to this plugin's Terms of Use can be
 * found on VisuStella.com and must be followed.
 *
 * ============================================================================
 * Credits
 * ============================================================================
 * 
 * If you are using this plugin, credit the following people in your game:
 * 
 * Team VisuStella
 * * Yanfly
 * * Arisu
 * * Olivia
 * * Irina
 *
 * ============================================================================
 * Changelog
 * ============================================================================
 * 
 * Version 1.10: November 16, 2023
 * * Compatibility Update!
 * ** Added compatibility functionality for future plugins.
 * 
 * Version 1.09: August 17, 2023
 * * Bug Fixes!
 * ** Fixed an error that would cause a crash upon using the "Return to Title
 *    Screen" event command with the "Event Title Screen" plugin installed. Fix
 *    made by Irina.
 * 
 * Version 1.08: May 18, 2023
 * * Bug Fixes!
 * ** Reflections should now work properly with VisuMZ_1_EventsMoveCore's
 *    latest version. Fix made by Arisu.
 * 
 * Version 1.07: August 4, 2022
 * * Compatibility Update!
 * ** Map Locked parallaxes now work better with smooth scroll.
 * 
 * Version 1.06: July 7, 2022
 * * Feature Update!
 * ** Blend modes are now revamped for the parallaxes to behave more like they
 *    do for pictures for better accuracy. Update made by Irina.
 * 
 * Version 1.05: January 27, 2022
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.04: January 6, 2022
 * * Compatibility Update
 * ** Added compatibility functionality for future plugins.
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.03: December 9, 2021
 * * Documentation Update!
 * ** Added section to "Major Changes" for clarification purposes:
 * *** Not For Battle
 * *** For clarification, the VisuStella MZ Visual Parallxes plugin is NOT made
 *     for battle. There's a separate plugin for that called Visual Battle
 *     Environment. The reason why parallaxes aren't made for battle is because
 *     the way parallaxes are handled in map vary from how they would be
 *     handled in battle. Using the Visual Parallaxes Plugin Commands will only
 *     alter the parallax appearances when the player finishes battle.
 * * Feature Update!
 * ** Added fail safes to prevent Plugin Command usage during battle to cause
 *    problems while inside battle test. Update made by Irina.
 * 
 * Version 1.02: June 25, 2021
 * * Compatibility Update
 * ** Added compatibility functionality for Event Title Scene.
 * 
 * Version 1.01: May 28, 2021
 * * Feature Update!
 * ** Fail safe added for those without Pixi JS Filters added.
 * ** Removed the VisuStella MZ Core Engine requirement.
 * * Optimization Update!
 * ** Plugin should run more optimized.
 *
 * Version 1.00 Official Release Date: March 12, 2021
 * * Finished Plugin!
 *
 * ============================================================================
 * End of Helpfile
 * ============================================================================
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ParallaxAddChangeSettings
 * @text Parallax: Add/Change Settings
 * @desc Add/Change settings for target parallax.
 * Does not alter the map editor's parallax.
 * 
 * @arg Required
 *
 * @arg id:num
 * @text ID
 * @parent Required
 * @type number
 * @min 1
 * @desc What is the ID of this parallax to be added/changed?
 * @default 1
 *
 * @arg filename:str
 * @text Filename
 * @parent Required
 * @type file
 * @dir img/parallaxes/
 * @desc What is the filename of the parallax?
 * @default >>>ATTENTION<<<
 *
 * @arg type:str
 * @text Type
 * @parent Required
 * @type select
 * @option Normal
 * @value normal
 * @option Water
 * @value water
 * @option Solid
 * @value solid
 * @desc What kind of parallax is this going to be?
 * @default normal
 *
 * @arg Optional:struct
 * @text Optional Settings
 * @type struct<Optional>
 * @desc Optional settings regarding Visual Parallaxes.
 * @default {"Scrolling":"","_parallaxZero:eval":"false","_parallaxLoopX:eval":"false","_parallaxSx:eval":"+0","_parallaxLoopY:eval":"false","_parallaxSy:eval":"+0","Appearance":"","opacity:eval":"255","blendMode:eval":"0","hue:eval":"0","hueShift:eval":"+0","colorTone:eval":"[0, 0, 0, 0]","Location":"","maskRegions:arraynum":"[]","maskTerrainTags:arraynum":"[]"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ParallaxFadeOpacity
 * @text Parallax: Fade Opacity
 * @desc Fades the target parallax(es) opacity to a different value.
 *
 * @arg list:arraynum
 * @text ID(s)
 * @type number[]
 * @min 1
 * @desc Target which parallax(es)?
 * Cannot target the map editor's parallax.
 * @default ["1"]
 *
 * @arg targetOpacity:eval
 * @text Target Opacity
 * @desc What opacity level to this value (0-255).
 * You may use JavaScript code to determine the value.
 * @default 255
 *
 * @arg opacityDuration:eval
 * @text Duration
 * @desc How many frames should this change take?
 * You may use JavaScript code to determine the value.
 * @default 60
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ParallaxRemove
 * @text Parallax: Remove
 * @desc Removes target parallax(es).
 *
 * @arg list:arraynum
 * @text ID(s)
 * @type number[]
 * @min 1
 * @desc Remove which parallax(es)?
 * Cannot remove the map editor's parallax.
 * @default ["1"]
 *
 * @ --------------------------------------------------------------------------
 *
 * @ ==========================================================================
 * @ Plugin Parameters
 * @ ==========================================================================
 *
 * @param BreakHead
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param VisualParallaxes
 * @default Plugin Parameters
 *
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param WaterReflect:struct
 * @text Water Reflection Settings
 * @type struct<WaterReflect>
 * @desc These are the default settings for water-based reflections.
 * @default {"Markers":"","Regions:arraynum":"[]","TerrainTags:arraynum":"[\"1\"]","Positioning":"","Top:eval":"true","Appearance":"","Blur:num":"0.8","Opacity:num":"128","Boundary:num":"0.1","AmpStart:num":"2","AmpEnd:num":"4","WaveStart:num":"4","WaveEnd:num":"16"}
 *
 * @param SolidReflect:struct
 * @text Solid Reflection Settings
 * @type struct<SolidReflect>
 * @desc These are the default settings for solid ground reflections.
 * @default {"Markers":"","Regions:arraynum":"[]","TerrainTags:arraynum":"[\"2\"]","Positioning":"","Top:eval":"true","Appearance":"","Blur:num":"0.8","Opacity:num":"128"}
 *
 * @param BreakEnd1
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param End Of
 * @default Plugin Parameters
 *
 * @param BreakEnd2
 * @text --------------------------
 * @default ----------------------------------
 *
 */
/* ----------------------------------------------------------------------------
 * Water Reflection Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~WaterReflect:
 *
 * @param Markers
 *
 * @param Regions:arraynum
 * @text Regions
 * @parent Markers
 * @type number[]
 * @min 1
 * @max 255
 * @desc By default, which regions by default apply this reflection? 0 is ignored.
 * @default []
 *
 * @param TerrainTags:arraynum
 * @text Terrain Tags
 * @parent Markers
 * @type number[]
 * @min 1
 * @max 7
 * @desc By default, which terrain tags by default apply this reflection? 0 is ignored.
 * @default ["1"]
 * 
 * @param Positioning
 * 
 * @param Top:eval
 * @text Above Parallaxes?
 * @parent Positioning
 * @type boolean
 * @on Above Parallaxes
 * @off Below Parallaxes
 * @desc Place water reflections above visual parallaxes?
 * @default true
 * 
 * @param Appearance
 *
 * @param Blur:num
 * @text Blur Rate
 * @parent Appearance
 * @desc How much do you wish to blur this reflection?
 * Use a decimal number between 0 and 1.
 * @default 0.8
 *
 * @param Opacity:num
 * @text Opacity
 * @parent Appearance
 * @type number
 * @min 0
 * @max 255
 * @desc What is the default opacity for this reflection?
 * Use a value between 0 and 255.
 * @default 128
 *
 * @param Boundary:num
 * @text Water Boundary
 * @parent Appearance
 * @desc At which point is the water boundary?
 * Use a decimal number between 0 and 1.
 * @default 0.1
 *
 * @param AmpStart:num
 * @text Amplitude Start
 * @parent Appearance
 * @type number
 * @desc What should be the starting amplitude value?
 * @default 2
 *
 * @param AmpEnd:num
 * @text Amplitude End
 * @parent Appearance
 * @type number
 * @desc What should be the ending amplitude value?
 * @default 4
 *
 * @param WaveStart:num
 * @text Wavelength Start
 * @parent Appearance
 * @type number
 * @desc What should be the starting wavelength value?
 * @default 4
 *
 * @param WaveEnd:num
 * @text Wavelength End
 * @parent Appearance
 * @type number
 * @desc What should be the ending wavelength value?
 * @default 16
 *
 */
/* ----------------------------------------------------------------------------
 * Solid Reflection Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~SolidReflect:
 *
 * @param Markers
 *
 * @param Regions:arraynum
 * @text Regions
 * @parent Markers
 * @type number[]
 * @min 1
 * @max 255
 * @desc By default, which regions by default apply this reflection? 0 is ignored.
 * @default []
 *
 * @param TerrainTags:arraynum
 * @text Terrain Tags
 * @parent Markers
 * @type number[]
 * @min 1
 * @max 7
 * @desc By default, which terrain tags by default apply this reflection? 0 is ignored.
 * @default ["2"]
 * 
 * @param Positioning
 * 
 * @param Top:eval
 * @text Above Parallaxes?
 * @parent Positioning
 * @type boolean
 * @on Above Parallaxes
 * @off Below Parallaxes
 * @desc Place solid reflections above visual parallaxes?
 * @default true
 * 
 * @param Appearance
 *
 * @param Blur:num
 * @text Blur Rate
 * @parent Appearance
 * @desc How much do you wish to blur this reflection?
 * Use a decimal number between 0 and 1.
 * @default 0.8
 *
 * @param Opacity:num
 * @text Opacity
 * @parent Appearance
 * @type number
 * @min 0
 * @max 255
 * @desc What is the default opacity for this reflection?
 * Use a value between 0 and 255.
 * @default 128
 *
 */
/* ----------------------------------------------------------------------------
 * Optional Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Optional:
 * 
 * @param Scrolling
 * 
 * @param _parallaxZero:eval
 * @text Map Lock?
 * @parent Scrolling
 * @type boolean
 * @on Map Lock
 * @off No Map Lock
 * @desc Lock the parallax to the map's scrolling?
 * Automatically enable if the filename starts with "!"
 * @default false
 * 
 * @param _parallaxLoopX:eval
 * @text Loop Horizontally?
 * @parent Scrolling
 * @type boolean
 * @on Loop
 * @off No Loop
 * @desc Loop the parallax horizontally?
 * Does not work with Map Lock enabled.
 * @default false
 *
 * @param _parallaxSx:eval
 * @text Scroll:
 * @parent _parallaxLoopX:eval
 * @desc What is the horizontal scroll speed?
 * Use a negative value to invert the direction.
 * @default +0
 * 
 * @param _parallaxLoopY:eval
 * @text Loop Vertically?
 * @parent Scrolling
 * @type boolean
 * @on Loop
 * @off No Loop
 * @desc Loop the parallax horizontally?
 * Does not work with Map Lock enabled.
 * @default false
 *
 * @param _parallaxSy:eval
 * @text Scroll:
 * @parent _parallaxLoopY:eval
 * @desc What is the vertical scroll speed?
 * Use a negative value to invert the direction.
 * @default +0
 * 
 * @param Appearance
 *
 * @param opacity:eval
 * @text Opacity
 * @parent Appearance
 * @desc What is the opacity level for this parallax?
 * You may use JavaScript code.
 * @default 255
 *
 * @param blendMode:eval
 * @text Blend Mode
 * @parent Appearance
 * @type select
 * @option 0 - Normal
 * @value 0
 * @option 1 - Additive
 * @value 1
 * @option 2 - Multiply
 * @value 2
 * @option 3 - Screen
 * @value 3
 * @desc What kind of blend mode do you wish to apply to the parallax?
 * You may use JavaScript code.
 * @default 0
 *
 * @param hue:eval
 * @text Hue
 * @parent Appearance
 * @desc Do you wish to adjust this parallax's hue?
 * You may use JavaScript code.
 * @default 0
 *
 * @param hueShift:eval
 * @text Hue Shift
 * @parent hue:eval
 * @desc How much do you want the hue to shift each frame?
 * You may use JavaScript code.
 * @default +0
 *
 * @param colorTone:eval
 * @text Color Tone
 * @parent Appearance
 * @desc What tone do you want for the parallax?
 * Format: [Red, Green, Blue, Gray]
 * @default [0, 0, 0, 0]
 * 
 * @param Location
 *
 * @param maskRegions:arraynum
 * @text Regions
 * @parent Location
 * @type number[]
 * @min 1
 * @max 255
 * @desc Which regions will show this parallax?
 * Does not work with 0. Leave empty to ignore.
 * @default []
 *
 * @param maskTerrainTags:arraynum
 * @text Terrain Tags
 * @parent Location
 * @type number[]
 * @min 1
 * @max 7
 * @desc Which terrain tags will show this parallax?
 * Does not work with 0. Leave empty to ignore.
 * @default []
 *
 */
//=============================================================================

function _0x2b66(_0x3eb3cc,_0x462bfa){const _0xb4e692=_0xb4e6();return _0x2b66=function(_0x2b6659,_0xfda179){_0x2b6659=_0x2b6659-0xfe;let _0x4d1e75=_0xb4e692[_0x2b6659];return _0x4d1e75;},_0x2b66(_0x3eb3cc,_0x462bfa);}const _0x48d215=_0x2b66;(function(_0x3b27a5,_0x2832fe){const _0x167790=_0x2b66,_0x4328a5=_0x3b27a5();while(!![]){try{const _0x22cefe=parseInt(_0x167790(0x1ba))/0x1+parseInt(_0x167790(0x11d))/0x2+parseInt(_0x167790(0x23c))/0x3+-parseInt(_0x167790(0x17b))/0x4+parseInt(_0x167790(0x128))/0x5+-parseInt(_0x167790(0x1ae))/0x6+parseInt(_0x167790(0x240))/0x7;if(_0x22cefe===_0x2832fe)break;else _0x4328a5['push'](_0x4328a5['shift']());}catch(_0x5932a7){_0x4328a5['push'](_0x4328a5['shift']());}}}(_0xb4e6,0xe625f));var label=_0x48d215(0x260),tier=tier||0x0,dependencies=[],pluginData=$plugins[_0x48d215(0x1df)](function(_0x97fe61){const _0x535309=_0x48d215;return _0x97fe61['status']&&_0x97fe61[_0x535309(0x1b8)]['includes']('['+label+']');})[0x0];VisuMZ[label]['Settings']=VisuMZ[label][_0x48d215(0x224)]||{},VisuMZ[_0x48d215(0x1d2)]=function(_0x18accb,_0x4dfb99){const _0x14f871=_0x48d215;for(const _0x3a4a9b in _0x4dfb99){if(_0x3a4a9b['match'](/(.*):(.*)/i)){if(_0x14f871(0x1ed)!==_0x14f871(0x1ed))this[_0x14f871(0x1bc)]=!![];else{const _0x15b3fa=String(RegExp['$1']),_0x55096a=String(RegExp['$2'])[_0x14f871(0x13d)]()[_0x14f871(0x12d)]();let _0x4254f4,_0xb024d,_0x152789;switch(_0x55096a){case _0x14f871(0x1e4):_0x4254f4=_0x4dfb99[_0x3a4a9b]!==''?Number(_0x4dfb99[_0x3a4a9b]):0x0;break;case _0x14f871(0x214):_0xb024d=_0x4dfb99[_0x3a4a9b]!==''?JSON[_0x14f871(0x26e)](_0x4dfb99[_0x3a4a9b]):[],_0x4254f4=_0xb024d[_0x14f871(0x13b)](_0x1a8b2c=>Number(_0x1a8b2c));break;case _0x14f871(0x114):_0x4254f4=_0x4dfb99[_0x3a4a9b]!==''?eval(_0x4dfb99[_0x3a4a9b]):null;break;case'ARRAYEVAL':_0xb024d=_0x4dfb99[_0x3a4a9b]!==''?JSON[_0x14f871(0x26e)](_0x4dfb99[_0x3a4a9b]):[],_0x4254f4=_0xb024d[_0x14f871(0x13b)](_0x38e589=>eval(_0x38e589));break;case _0x14f871(0x171):_0x4254f4=_0x4dfb99[_0x3a4a9b]!==''?JSON[_0x14f871(0x26e)](_0x4dfb99[_0x3a4a9b]):'';break;case'ARRAYJSON':_0xb024d=_0x4dfb99[_0x3a4a9b]!==''?JSON[_0x14f871(0x26e)](_0x4dfb99[_0x3a4a9b]):[],_0x4254f4=_0xb024d[_0x14f871(0x13b)](_0x593fc7=>JSON[_0x14f871(0x26e)](_0x593fc7));break;case _0x14f871(0x18e):_0x4254f4=_0x4dfb99[_0x3a4a9b]!==''?new Function(JSON[_0x14f871(0x26e)](_0x4dfb99[_0x3a4a9b])):new Function('return\x200');break;case _0x14f871(0x133):_0xb024d=_0x4dfb99[_0x3a4a9b]!==''?JSON['parse'](_0x4dfb99[_0x3a4a9b]):[],_0x4254f4=_0xb024d[_0x14f871(0x13b)](_0x297649=>new Function(JSON[_0x14f871(0x26e)](_0x297649)));break;case'STR':_0x4254f4=_0x4dfb99[_0x3a4a9b]!==''?String(_0x4dfb99[_0x3a4a9b]):'';break;case _0x14f871(0x182):_0xb024d=_0x4dfb99[_0x3a4a9b]!==''?JSON[_0x14f871(0x26e)](_0x4dfb99[_0x3a4a9b]):[],_0x4254f4=_0xb024d['map'](_0xe8afde=>String(_0xe8afde));break;case'STRUCT':_0x152789=_0x4dfb99[_0x3a4a9b]!==''?JSON['parse'](_0x4dfb99[_0x3a4a9b]):{},_0x4254f4=VisuMZ[_0x14f871(0x1d2)]({},_0x152789);break;case _0x14f871(0x1c5):_0xb024d=_0x4dfb99[_0x3a4a9b]!==''?JSON['parse'](_0x4dfb99[_0x3a4a9b]):[],_0x4254f4=_0xb024d['map'](_0x59f4fd=>VisuMZ['ConvertParams']({},JSON[_0x14f871(0x26e)](_0x59f4fd)));break;default:continue;}_0x18accb[_0x15b3fa]=_0x4254f4;}}}return _0x18accb;},(_0x4d65af=>{const _0x4ebfbb=_0x48d215,_0x364d73=_0x4d65af[_0x4ebfbb(0x1ac)];for(const _0x2238fd of dependencies){if(_0x4ebfbb(0x156)==='NEoii'){if(!Imported[_0x2238fd]){alert('%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.'[_0x4ebfbb(0x236)](_0x364d73,_0x2238fd)),SceneManager[_0x4ebfbb(0x172)]();break;}}else _0x45cc5b[_0x4ebfbb(0x243)](_0x300a78,_0x1ec192);}const _0x358d7a=_0x4d65af[_0x4ebfbb(0x1b8)];if(_0x358d7a['match'](/\[Version[ ](.*?)\]/i)){const _0xeb4e6a=Number(RegExp['$1']);_0xeb4e6a!==VisuMZ[label][_0x4ebfbb(0x174)]&&(_0x4ebfbb(0x1db)!==_0x4ebfbb(0x1ef)?(alert(_0x4ebfbb(0x253)[_0x4ebfbb(0x236)](_0x364d73,_0xeb4e6a)),SceneManager[_0x4ebfbb(0x172)]()):(this['addChild'](_0x10fc3),this[_0x4ebfbb(0x148)][_0x4ebfbb(0x24e)]=_0x5e6d9f));}if(_0x358d7a[_0x4ebfbb(0x175)](/\[Tier[ ](\d+)\]/i)){if(_0x4ebfbb(0x100)===_0x4ebfbb(0x23f))this[_0x4ebfbb(0x140)][_0x4ebfbb(0x202)]=new _0x56ba68['filters'][(_0x4ebfbb(0x1c6))]({'boundary':_0x1c3c59[_0x4ebfbb(0x1f5)](),'amplitude':_0x4cd95d[_0x4ebfbb(0x168)](),'waveLength':_0x21d0e9[_0x4ebfbb(0x129)](),'mirror':![]});else{const _0x443749=Number(RegExp['$1']);_0x443749<tier?(alert(_0x4ebfbb(0x1e2)[_0x4ebfbb(0x236)](_0x364d73,_0x443749,tier)),SceneManager[_0x4ebfbb(0x172)]()):tier=Math[_0x4ebfbb(0x206)](_0x443749,tier);}}VisuMZ[_0x4ebfbb(0x1d2)](VisuMZ[label][_0x4ebfbb(0x224)],_0x4d65af[_0x4ebfbb(0x1f7)]);})(pluginData),VisuMZ[_0x48d215(0x260)][_0x48d215(0x216)]=function(){return{'id':0x0,'filename':'','_parallaxZero':![],'_parallaxLoopX':![],'_parallaxLoopY':![],'_parallaxSx':0x0,'_parallaxSy':0x0,'_parallaxX':0x0,'_parallaxY':0x0,'opacity':0xff,'targetOpacity':0xff,'opacityDuration':0x0,'blendMode':0x0,'hue':0x0,'hueShift':0x0,'colorTone':[0x0,0x0,0x0,0x0],'maskRegions':[],'maskTerrainTags':[]};},PluginManager[_0x48d215(0x21a)](pluginData[_0x48d215(0x1ac)],_0x48d215(0x1d9),_0x10d72f=>{const _0x433f9=_0x48d215;VisuMZ[_0x433f9(0x1d2)](_0x10d72f,_0x10d72f);if(_0x10d72f['id']<=0x0)return;if(_0x10d72f[_0x433f9(0x1dd)]===''||_0x10d72f[_0x433f9(0x1dd)]===_0x433f9(0x123))return;let _0x3bd45f=JsonEx[_0x433f9(0x1a3)](_0x10d72f[_0x433f9(0x170)]);if(!_0x3bd45f[_0x433f9(0x14f)](_0x433f9(0x15b)))_0x3bd45f=VisuMZ[_0x433f9(0x260)][_0x433f9(0x216)]();_0x3bd45f[_0x433f9(0x1dd)]=_0x10d72f[_0x433f9(0x1dd)],_0x3bd45f['id']=_0x10d72f['id'];if(_0x10d72f[_0x433f9(0x1a6)]===_0x433f9(0x26a)){if(_0x433f9(0x254)===_0x433f9(0x251))return _0x19254d['round']((_0xffa0ba(_0x59fdf1['$1'])||0x0)*0.01*0xff)[_0x433f9(0x12b)](0x0,0xff);else _0x3bd45f['maskRegions'][_0x433f9(0x21b)]<=0x0&&(_0x433f9(0x22b)!==_0x433f9(0x186)?_0x3bd45f[_0x433f9(0x15b)]=JsonEx[_0x433f9(0x1a3)]($gameMap[_0x433f9(0x19c)]()):(_0x39a3d2['VisualParallaxes'][_0x433f9(0x226)][_0x433f9(0x1ec)](this),this[_0x433f9(0x1b6)]())),_0x3bd45f[_0x433f9(0x212)][_0x433f9(0x21b)]<=0x0&&(_0x3bd45f[_0x433f9(0x212)]=JsonEx[_0x433f9(0x1a3)]($gameMap[_0x433f9(0x1be)]()));}_0x10d72f['type']===_0x433f9(0x146)&&(_0x3bd45f[_0x433f9(0x15b)]['length']<=0x0&&(_0x3bd45f['maskRegions']=JsonEx[_0x433f9(0x1a3)]($gameMap[_0x433f9(0x1f1)]())),_0x3bd45f[_0x433f9(0x212)][_0x433f9(0x21b)]<=0x0&&(_0x3bd45f[_0x433f9(0x212)]=JsonEx[_0x433f9(0x1a3)]($gameMap[_0x433f9(0x24f)]())));while(_0x3bd45f[_0x433f9(0x1eb)][_0x433f9(0x21b)]<0x4){_0x3bd45f[_0x433f9(0x1eb)][_0x433f9(0x26c)](0x0);}_0x3bd45f[_0x433f9(0x225)]=0x0,_0x3bd45f[_0x433f9(0x136)]=0x0,_0x3bd45f['targetOpacity']=_0x10d72f[_0x433f9(0x1a0)],_0x3bd45f[_0x433f9(0x252)]=0x0,$gameMap[_0x433f9(0x204)](_0x3bd45f);}),PluginManager['registerCommand'](pluginData[_0x48d215(0x1ac)],_0x48d215(0x1e7),_0x231812=>{const _0x24924e=_0x48d215;if(!SceneManager['isInstanceOfSceneMap']())return;VisuMZ[_0x24924e(0x1d2)](_0x231812,_0x231812);const _0x3ddeb8=_0x231812['list'];for(const _0x592b9b of _0x3ddeb8){const _0x172e43=$gameMap[_0x24924e(0x1a5)](_0x592b9b);if(!_0x172e43)continue;_0x172e43[_0x24924e(0x11f)]=_0x231812['targetOpacity']||0x0,_0x172e43[_0x24924e(0x252)]=_0x231812[_0x24924e(0x252)]||0x0,_0x172e43['opacityDuration']<=0x0&&(_0x172e43['opacity']=_0x172e43[_0x24924e(0x11f)]);}}),PluginManager[_0x48d215(0x21a)](pluginData[_0x48d215(0x1ac)],'ParallaxRemove',_0x3e5b16=>{const _0x1d7ce6=_0x48d215;if(!SceneManager[_0x1d7ce6(0x109)]())return;VisuMZ[_0x1d7ce6(0x1d2)](_0x3e5b16,_0x3e5b16);const _0x35387c=_0x3e5b16[_0x1d7ce6(0x220)];for(const _0xd752a9 of _0x35387c){$gameMap[_0x1d7ce6(0x245)](_0xd752a9);}}),VisuMZ[_0x48d215(0x260)]['RegExp']={'Start':/<(?:PARALLAX|WATER PARALLAX|SOLID PARALLAX)[ ](\d+)[ ](?:SETTING|SETTINGS)>/i,'End':/<\/(?:PARALLAX|WATER PARALLAX|SOLID PARALLAX)[ ](\d+)[ ](?:SETTING|SETTINGS)>/i,'Filename':/(?:FILENAME|NAME):[ ](.*)/i,'HorzLoop':/(?:HORZ|HORIZONTAL) (?:LOOP|SCROLL):[ ](.*)/i,'VertLoop':/(?:VERT|VERTICAL) (?:LOOP|SCROLL):[ ](.*)/i,'ScrollLock':/<(?:MAP|SCROLL)[ ](?:LOCK|LOCKED)>/i,'OpacityRate':/(?:OPACITY):[ ](\d+)([%％])/i,'OpacityFlat':/(?:OPACITY):[ ](\d+)/i,'BlendMode':/BLEND MODE:[ ](.*)/i,'Hue':/HUE:[ ](\d+)/i,'HueShift':/HUE (?:SHIFT|SPEED):[ ](.*)/i,'Tone':/(?:COLOR TONE|TONE|TINT):[ ](.*)/i,'MaskRegions':/(?:REGION|REGIONS):[ ](.*)/i,'MaskTerrainTags':/TERRAIN (?:TAG|TAGS):[ ](.*)/i,'WaterRegions':/<(?:WATER|WATER REFLECT|WATER REFLECTION) (?:REGION|REGIONS):[ ](.*)>/i,'WaterTerrainTags':/<(?:WATER|WATER REFLECT|WATER REFLECTION) TERRAIN (?:TAG|TAGS):[ ](.*)>/i,'WaterTop':/<(?:WATER|WATER REFLECT|WATER REFLECTION) TOP>/i,'WaterBottom':/<(?:WATER|WATER REFLECT|WATER REFLECTION) BOTTOM>/i,'WaterBlur':/<(?:WATER|WATER REFLECT|WATER REFLECTION) BLUR:[ ](.*)>/i,'WaterOpacityRate':/<(?:WATER|WATER REFLECT|WATER REFLECTION) OPACITY:[ ](\d+)([%％])>/i,'WaterOpacityFlat':/<(?:WATER|WATER REFLECT|WATER REFLECTION) OPACITY:[ ](\d+)>/i,'WaterBoundary':/<(?:WATER|WATER REFLECT|WATER REFLECTION) BOUNDARY:[ ](.*)>/i,'WaterAmplitude':/<(?:WATER|WATER REFLECT|WATER REFLECTION) (?:AMP|AMPLITUDE):[ ](.*)>/i,'WaterWavelength':/<(?:WATER|WATER REFLECT|WATER REFLECTION) (?:WAVE|WAVELENGTH):[ ](.*)>/i,'SolidRegions':/<(?:SOLID|SOLID REFLECT|SOLID REFLECTION) (?:REGION|REGIONS):[ ](.*)>/i,'SolidTerrainTags':/<(?:SOLID|SOLID REFLECT|SOLID REFLECTION) TERRAIN (?:TAG|TAGS):[ ](.*)>/i,'SolidTop':/<(?:SOLID|SOLID REFLECT|SOLID REFLECTION) TOP>/i,'SolidBottom':/<(?:SOLID|SOLID REFLECT|SOLID REFLECTION) BOTTOM>/i,'SolidBlur':/<(?:SOLID|SOLID REFLECT|SOLID REFLECTION) BLUR:[ ](.*)>/i,'SolidOpacityRate':/<(?:SOLID|SOLID REFLECT|SOLID REFLECTION) OPACITY:[ ](\d+)([%％])>/i,'SolidOpacityFlat':/<(?:SOLID|SOLID REFLECT|SOLID REFLECTION) OPACITY:[ ](\d+)>/i,'NoReflection':/<NO (?:REFLECT|REFLECTION|REFLECTIONS)>/i},SceneManager['isSceneMap']=function(){const _0x350c4d=_0x48d215;return this['_scene']&&this[_0x350c4d(0x145)]['constructor']===Scene_Map;},SceneManager[_0x48d215(0x109)]=function(){const _0x69b7ab=_0x48d215;return this[_0x69b7ab(0x145)]&&this[_0x69b7ab(0x145)]instanceof Scene_Map;},VisuMZ[_0x48d215(0x260)]['Game_Map_setup']=Game_Map['prototype'][_0x48d215(0x1d1)],Game_Map[_0x48d215(0x23b)]['setup']=function(_0x2ecfed){const _0x4d4bef=_0x48d215;VisuMZ[_0x4d4bef(0x260)][_0x4d4bef(0x210)][_0x4d4bef(0x1ec)](this,_0x2ecfed),this[_0x4d4bef(0x22d)](),this[_0x4d4bef(0x1f4)]();},Game_Map['DEFAULT_WATER_REFLECTION_REGIONS']=VisuMZ[_0x48d215(0x260)]['Settings'][_0x48d215(0x15a)][_0x48d215(0x205)],Game_Map['DEFAULT_WATER_REFLECTION_TERRAINTAGS']=VisuMZ[_0x48d215(0x260)][_0x48d215(0x224)][_0x48d215(0x15a)][_0x48d215(0x184)],Game_Map[_0x48d215(0x23b)]['noReflections']=function(){const _0x25a077=_0x48d215;if(DataManager[_0x25a077(0x1cd)]())return!![];if(this[_0x25a077(0x14c)]()||this[_0x25a077(0x227)]())return!![];const _0x52d6c1=VisuMZ[_0x25a077(0x260)]['RegExp'],_0x4471f8=$dataMap[_0x25a077(0x160)]||'';if(_0x4471f8[_0x25a077(0x175)](_0x52d6c1[_0x25a077(0x126)])){if(_0x25a077(0x1d8)!==_0x25a077(0x1d8)){if(!this[_0x25a077(0x207)]())return;const _0x2c59cc=this[_0x25a077(0x220)]();let _0x4e62f9='';for(const _0xd4344a of _0x2c59cc){if([0x6c,0x198][_0x25a077(0x176)](_0xd4344a[_0x25a077(0x192)])){if(_0x4e62f9!=='')_0x4e62f9+='\x0a';_0x4e62f9+=_0xd4344a[_0x25a077(0x1f7)][0x0];}}this['checkVisualParallaxesStringTags'](_0x4e62f9);}else return!![];}else return![];},Game_Map[_0x48d215(0x23b)][_0x48d215(0x19c)]=function(){const _0x2b2f23=_0x48d215,_0x46713f=VisuMZ[_0x2b2f23(0x260)][_0x2b2f23(0x1af)],_0x515cd8=$dataMap[_0x2b2f23(0x160)]||'';if(_0x515cd8[_0x2b2f23(0x175)](_0x46713f[_0x2b2f23(0x1d6)]))return String(RegExp['$1'])['split'](',')[_0x2b2f23(0x13b)](_0xf32740=>Number(_0xf32740)||0x1)[_0x2b2f23(0x16a)](0x0);return JsonEx[_0x2b2f23(0x1a3)](Game_Map[_0x2b2f23(0x20f)])['remove'](0x0);},Game_Map[_0x48d215(0x23b)][_0x48d215(0x1be)]=function(){const _0x15f8f9=_0x48d215,_0x5b53fc=VisuMZ[_0x15f8f9(0x260)][_0x15f8f9(0x1af)],_0x46a1f4=$dataMap[_0x15f8f9(0x160)]||'';if(_0x46a1f4[_0x15f8f9(0x175)](_0x5b53fc['WaterTerrainTags']))return String(RegExp['$1'])[_0x15f8f9(0x1ad)](',')[_0x15f8f9(0x13b)](_0x5ed75b=>Number(_0x5ed75b)||0x1)[_0x15f8f9(0x16a)](0x0);return JsonEx[_0x15f8f9(0x1a3)](Game_Map[_0x15f8f9(0x1cf)])['remove'](0x0);},Game_Map['DEFAULT_WATER_REFLECTION_FILTER_TOP']=VisuMZ[_0x48d215(0x260)][_0x48d215(0x224)][_0x48d215(0x15a)][_0x48d215(0x20c)],Game_Map['DEFAULT_WATER_REFLECTION_FILTER_BLUR']=VisuMZ[_0x48d215(0x260)][_0x48d215(0x224)]['WaterReflect'][_0x48d215(0x228)],Game_Map['DEFAULT_WATER_REFLECTION_FILTER_OPACITY']=VisuMZ[_0x48d215(0x260)][_0x48d215(0x224)][_0x48d215(0x15a)][_0x48d215(0x262)],Game_Map[_0x48d215(0x132)]=VisuMZ[_0x48d215(0x260)][_0x48d215(0x224)]['WaterReflect'][_0x48d215(0x20d)],Game_Map[_0x48d215(0x1ab)]=[VisuMZ[_0x48d215(0x260)][_0x48d215(0x224)][_0x48d215(0x15a)][_0x48d215(0x255)],VisuMZ[_0x48d215(0x260)][_0x48d215(0x224)]['WaterReflect'][_0x48d215(0x20b)]],Game_Map[_0x48d215(0x221)]=[VisuMZ['VisualParallaxes'][_0x48d215(0x224)][_0x48d215(0x15a)][_0x48d215(0x24a)],VisuMZ[_0x48d215(0x260)][_0x48d215(0x224)][_0x48d215(0x15a)][_0x48d215(0x22f)]],Game_Map[_0x48d215(0x23b)][_0x48d215(0x11a)]=function(){const _0x402231=_0x48d215,_0x26a3b5=VisuMZ[_0x402231(0x260)][_0x402231(0x1af)],_0x386a2c=$dataMap[_0x402231(0x160)]||'';if(_0x386a2c[_0x402231(0x175)](_0x26a3b5[_0x402231(0x249)])){if(_0x402231(0x1c3)===_0x402231(0x1cc))this[_0x402231(0x22d)]();else return!![];}else{if(_0x386a2c[_0x402231(0x175)](_0x26a3b5['WaterBottom']))return![];}return Game_Map['DEFAULT_WATER_REFLECTION_FILTER_TOP'];},Game_Map[_0x48d215(0x23b)]['getWaterReflectionBlur']=function(){const _0x15f083=_0x48d215,_0x3f7578=VisuMZ[_0x15f083(0x260)][_0x15f083(0x1af)],_0x3f3dda=$dataMap[_0x15f083(0x160)]||'';if(_0x3f3dda[_0x15f083(0x175)](_0x3f7578[_0x15f083(0x1fd)]))return Math[_0x15f083(0x206)](0x0,Number(RegExp['$1'])||0x0);return Game_Map[_0x15f083(0x163)];},Game_Map['prototype']['getWaterReflectionOpacity']=function(){const _0x5ae491=_0x48d215,_0x407070=VisuMZ[_0x5ae491(0x260)]['RegExp'],_0x329866=$dataMap[_0x5ae491(0x160)]||'';if(_0x329866[_0x5ae491(0x175)](_0x407070['WaterOpacityRate'])){if(_0x5ae491(0x185)!==_0x5ae491(0x113))return Math['round']((Number(RegExp['$1'])||0x0)*0.01*0xff)['clamp'](0x0,0xff);else _0x5f048f[_0x5ae491(0x225)]+=this[_0x5ae491(0x219)]-_0x15297a;}else{if(_0x329866[_0x5ae491(0x175)](_0x407070[_0x5ae491(0x14e)])){if(_0x5ae491(0x12f)!==_0x5ae491(0x250))return(Number(RegExp['$1'])||0x0)[_0x5ae491(0x12b)](0x0,0xff);else _0x3abad7[_0x5ae491(0x145)]['_grafterRefreshRegions'][_0x5ae491(0x26c)](_0x17bf00);}}return Game_Map[_0x5ae491(0x1b4)];},Game_Map[_0x48d215(0x23b)]['getWaterReflectionBoundary']=function(){const _0x49ad4c=_0x48d215,_0x1f6ea1=VisuMZ[_0x49ad4c(0x260)]['RegExp'],_0x566407=$dataMap['note']||'';if(_0x566407['match'](_0x1f6ea1[_0x49ad4c(0x238)]))return(Number(RegExp['$1'])||0x0)[_0x49ad4c(0x12b)](0x0,0x1);return Game_Map[_0x49ad4c(0x132)];},Game_Map[_0x48d215(0x23b)][_0x48d215(0x168)]=function(){const _0x217c10=_0x48d215,_0x3857b7=VisuMZ['VisualParallaxes'][_0x217c10(0x1af)],_0x58ca46=$dataMap['note']||'';if(_0x58ca46[_0x217c10(0x175)](_0x3857b7[_0x217c10(0x21f)])){if('HpmcR'!==_0x217c10(0x173)){const _0x28e39f=String(RegExp['$1'])[_0x217c10(0x1ad)](',')[_0x217c10(0x13b)](_0x1656ff=>Number(_0x1656ff)||0x0);if(_0x28e39f[_0x217c10(0x21b)]<=0x1)_0x28e39f[0x1]=_0x28e39f[0x0];}else{const _0x35236d=_0x359c8e['getSolidReflectionRegions'](),_0x427f12=_0x187896['getSolidReflectionTerrainTags'](),_0x204f18=this['createReflectionMask'](_0x35236d,_0x427f12);_0x204f18&&(this[_0x217c10(0x14b)](_0x204f18),this['_solidReflectLayer'][_0x217c10(0x24e)]=_0x204f18);}}return JsonEx[_0x217c10(0x1a3)](Game_Map[_0x217c10(0x1ab)])[_0x217c10(0x16a)](0x0);},Game_Map[_0x48d215(0x23b)][_0x48d215(0x129)]=function(){const _0xe6f3b=_0x48d215,_0x24973f=VisuMZ['VisualParallaxes'][_0xe6f3b(0x1af)],_0x4b7de6=$dataMap[_0xe6f3b(0x160)]||'';if(_0x4b7de6[_0xe6f3b(0x175)](_0x24973f[_0xe6f3b(0x21f)])){const _0x4fd0ab=String(RegExp['$1'])[_0xe6f3b(0x1ad)](',')[_0xe6f3b(0x13b)](_0x50d6b6=>Number(_0x50d6b6)||0x0);if(_0x4fd0ab[_0xe6f3b(0x21b)]<=0x1)_0x4fd0ab[0x1]=_0x4fd0ab[0x0];}return JsonEx[_0xe6f3b(0x1a3)](Game_Map['DEFAULT_WATER_REFLECTION_FILTER_WAVELENGTH'])[_0xe6f3b(0x16a)](0x0);},Game_Map[_0x48d215(0x111)]=VisuMZ[_0x48d215(0x260)][_0x48d215(0x224)][_0x48d215(0x1b0)][_0x48d215(0x205)],Game_Map[_0x48d215(0x1fe)]=VisuMZ[_0x48d215(0x260)]['Settings'][_0x48d215(0x1b0)][_0x48d215(0x184)],Game_Map[_0x48d215(0x23b)][_0x48d215(0x1f1)]=function(){const _0x4322da=_0x48d215,_0x22faef=VisuMZ[_0x4322da(0x260)][_0x4322da(0x1af)],_0x2628b1=$dataMap[_0x4322da(0x160)]||'';if(_0x2628b1['match'](_0x22faef[_0x4322da(0x259)])){if(_0x4322da(0x19a)!==_0x4322da(0x19a))_0x30ab75[_0x4322da(0x141)][_0x4322da(0x187)](_0x2d1dc7*_0x19dc18+_0x156bf0,_0x1584e0*_0x4671f3+_0x5f1186,_0x597d05-_0x47ca82,_0x9627b9-_0x42e13e,_0x4322da(0x122)),_0x175342[_0x4322da(0x213)]&&_0x70b1c0['_scene'][_0x4322da(0x195)]['push'](_0x5140ea);else return String(RegExp['$1'])['split'](',')[_0x4322da(0x13b)](_0x5e5280=>Number(_0x5e5280)||0x1)[_0x4322da(0x16a)](0x0);}return JsonEx[_0x4322da(0x1a3)](Game_Map[_0x4322da(0x111)])[_0x4322da(0x16a)](0x0);},Game_Map[_0x48d215(0x23b)]['getSolidReflectionTerrainTags']=function(){const _0x58b7b6=_0x48d215,_0x2f35ae=VisuMZ[_0x58b7b6(0x260)]['RegExp'],_0x514a54=$dataMap[_0x58b7b6(0x160)]||'';if(_0x514a54[_0x58b7b6(0x175)](_0x2f35ae[_0x58b7b6(0x271)])){if(_0x58b7b6(0x247)!==_0x58b7b6(0x247))_0x158aca(_0x58b7b6(0x1e2)[_0x58b7b6(0x236)](_0x5ac7ca,_0x387a03,_0x451540)),_0xe13915['exit']();else return String(RegExp['$1'])[_0x58b7b6(0x1ad)](',')[_0x58b7b6(0x13b)](_0x375b97=>Number(_0x375b97)||0x1)[_0x58b7b6(0x16a)](0x0);}return JsonEx[_0x58b7b6(0x1a3)](Game_Map['DEFAULT_SOLID_REFLECTION_TERRAINTAGS'])['remove'](0x0);},Game_Map[_0x48d215(0x1e5)]=VisuMZ[_0x48d215(0x260)][_0x48d215(0x224)][_0x48d215(0x1b0)][_0x48d215(0x20c)],Game_Map[_0x48d215(0x183)]=VisuMZ['VisualParallaxes']['Settings']['SolidReflect'][_0x48d215(0x228)],Game_Map['DEFAULT_SOLID_REFLECTION_FILTER_OPACITY']=VisuMZ[_0x48d215(0x260)][_0x48d215(0x224)][_0x48d215(0x1b0)]['Opacity'],Game_Map[_0x48d215(0x23b)][_0x48d215(0x26b)]=function(){const _0x5c3430=_0x48d215,_0x3335a4=VisuMZ[_0x5c3430(0x260)][_0x5c3430(0x1af)],_0x547b57=$dataMap['note']||'';if(_0x547b57[_0x5c3430(0x175)](_0x3335a4[_0x5c3430(0x197)]))return!![];else{if(_0x547b57[_0x5c3430(0x175)](_0x3335a4[_0x5c3430(0x143)]))return![];}return Game_Map['DEFAULT_SOLID_REFLECTION_FILTER_TOP'];},Game_Map[_0x48d215(0x23b)][_0x48d215(0x153)]=function(){const _0x3cf781=_0x48d215,_0x1463e7=VisuMZ[_0x3cf781(0x260)]['RegExp'],_0x4038ca=$dataMap[_0x3cf781(0x160)]||'';if(_0x4038ca[_0x3cf781(0x175)](_0x1463e7[_0x3cf781(0x119)]))return Math[_0x3cf781(0x206)](0x0,Number(RegExp['$1'])||0x0);return Game_Map[_0x3cf781(0x183)];},Game_Map[_0x48d215(0x23b)][_0x48d215(0x1d4)]=function(){const _0x33503f=_0x48d215,_0xc61db5=VisuMZ[_0x33503f(0x260)][_0x33503f(0x1af)],_0x31c43e=$dataMap['note']||'';if(_0x31c43e[_0x33503f(0x175)](_0xc61db5[_0x33503f(0x24c)]))return Math[_0x33503f(0x1fc)]((Number(RegExp['$1'])||0x0)*0.01*0xff)[_0x33503f(0x12b)](0x0,0xff);else{if(_0x31c43e[_0x33503f(0x175)](_0xc61db5[_0x33503f(0x18f)])){if(_0x33503f(0x19b)!=='uLGYc')return(Number(RegExp['$1'])||0x0)[_0x33503f(0x12b)](0x0,0xff);else _0x197e84[_0x33503f(0x225)]+=this['_displayX']-_0x2b3b44;}}return Game_Map[_0x33503f(0x1b4)];},Game_Map[_0x48d215(0x23b)][_0x48d215(0x1f4)]=function(){const _0x5df727=_0x48d215,_0x230db4=this[_0x5df727(0x19c)](),_0x2cdfa1=this['getWaterReflectionTerrainTags'](),_0x384bc7=this['getSolidReflectionRegions'](),_0x12775e=this[_0x5df727(0x24f)](),_0x3ca255=this['width'](),_0x5630ea=this[_0x5df727(0x1dc)]();this[_0x5df727(0x258)]=![],this[_0x5df727(0x1bc)]=![];for(let _0x4cd4b3=0x0;_0x4cd4b3<_0x3ca255;_0x4cd4b3++){if(_0x5df727(0x18c)!==_0x5df727(0x18c))_0x4dc698['_scene']['_grafterRefreshRegions']['push'](_0x518100);else for(let _0x4ffbd8=0x0;_0x4ffbd8<_0x3ca255;_0x4ffbd8++){const _0x2dbe18=this[_0x5df727(0x13e)](_0x4cd4b3,_0x4ffbd8);_0x230db4[_0x5df727(0x176)](_0x2dbe18)&&(this[_0x5df727(0x258)]=!![]);if(_0x384bc7[_0x5df727(0x176)](_0x2dbe18)){if(_0x5df727(0x13c)==='FKyDr')return![];else this[_0x5df727(0x1bc)]=!![];}const _0x63364b=this[_0x5df727(0x13a)](_0x4cd4b3,_0x4ffbd8);_0x2cdfa1[_0x5df727(0x176)](_0x63364b)&&(this[_0x5df727(0x258)]=!![]);_0x12775e[_0x5df727(0x176)](_0x63364b)&&(this[_0x5df727(0x1bc)]=!![]);if(this['_hasWaterReflections']&&this['_hasSolidReflections']){if(_0x5df727(0x190)!==_0x5df727(0x1aa))break;else this[_0x5df727(0x267)][_0x5df727(0x112)][_0x5df727(0x25c)]((_0x138774,_0x1ea3ca)=>_0x138774[_0x5df727(0x1a2)]-_0x1ea3ca[_0x5df727(0x1a2)]);}}}},Game_Map[_0x48d215(0x23b)][_0x48d215(0x1e9)]=function(){const _0x2ad50e=_0x48d215;if(this[_0x2ad50e(0x258)]===undefined)this[_0x2ad50e(0x1f4)]();return this[_0x2ad50e(0x258)];},Game_Map['prototype'][_0x48d215(0xfe)]=function(){const _0x3e7d3a=_0x48d215;if(this[_0x3e7d3a(0x1bc)]===undefined)this[_0x3e7d3a(0x1f4)]();return this[_0x3e7d3a(0x1bc)];},Game_Map[_0x48d215(0x23b)][_0x48d215(0x22d)]=function(){const _0x109a00=_0x48d215;this[_0x109a00(0x180)]=[null];if(!$dataMap)return;const _0x383ff0=VisuMZ[_0x109a00(0x260)][_0x109a00(0x241)]();for(const _0x3162ef of _0x383ff0){if('PvJxI'!==_0x109a00(0x19d)){if(!_0x3162ef)continue;this['_visualParallaxSettings'][_0x3162ef['id']]=_0x3162ef;}else _0x4254e4[_0x109a00(0x136)]+=_0x3db53b[_0x109a00(0x169)]/this[_0x109a00(0x118)]()/0x2;}},VisuMZ['VisualParallaxes'][_0x48d215(0x241)]=function(){const _0x1fb878=_0x48d215;if(!$dataMap)return[];const _0x43188e=[],_0x29f5ce=VisuMZ[_0x1fb878(0x260)][_0x1fb878(0x216)]();if(!$dataMap[_0x1fb878(0x160)])return[];const _0x43debe=VisuMZ[_0x1fb878(0x260)][_0x1fb878(0x1af)],_0x230d0b=$dataMap[_0x1fb878(0x160)][_0x1fb878(0x1ad)](/[\r\n]+/);let _0x53a012=JsonEx['makeDeepCopy'](_0x29f5ce);for(const _0x2e8cb2 of _0x230d0b){if(_0x2e8cb2[_0x1fb878(0x175)](_0x43debe['Start'])){_0x53a012['id']=Number(RegExp['$1']);if(_0x2e8cb2[_0x1fb878(0x175)](/WATER/i))_0x53a012['maskRegions']=JsonEx[_0x1fb878(0x1a3)]($gameMap[_0x1fb878(0x19c)]()),_0x53a012[_0x1fb878(0x212)]=JsonEx['makeDeepCopy']($gameMap[_0x1fb878(0x1be)]());else _0x2e8cb2[_0x1fb878(0x175)](/SOLID/i)&&(_0x53a012[_0x1fb878(0x15b)]=JsonEx[_0x1fb878(0x1a3)]($gameMap[_0x1fb878(0x1f1)]()),_0x53a012['maskTerrainTags']=JsonEx[_0x1fb878(0x1a3)]($gameMap[_0x1fb878(0x24f)]()));}else{if(_0x2e8cb2[_0x1fb878(0x175)](_0x43debe['End'])){if(_0x1fb878(0x179)!=='CJjFX'){const _0x19cda9=Number(RegExp['$1']);if(_0x19cda9>0x0&&_0x19cda9===_0x53a012['id']&&_0x53a012[_0x1fb878(0x1dd)]!=='')_0x43188e[_0x1fb878(0x26c)](_0x53a012);_0x53a012=JsonEx[_0x1fb878(0x1a3)](_0x29f5ce);}else this[_0x1fb878(0x1d5)]=new _0x59a0e5(),this['createMaskBitmap']();}else{if(_0x53a012['id']<=0x0)continue;}}if(_0x2e8cb2[_0x1fb878(0x175)](_0x43debe[_0x1fb878(0x18b)])){_0x53a012['filename']=String(RegExp['$1'])['trim']();if(_0x53a012[_0x1fb878(0x1dd)][_0x1fb878(0x269)](0x0)==='!'){if(_0x1fb878(0x10d)==='TiveT')_0x53a012[_0x1fb878(0x1e0)]=!![];else return(_0x247b10(_0x2df6fd['$1'])||0x0)[_0x1fb878(0x12b)](0x0,0x1);}}else{if(_0x2e8cb2[_0x1fb878(0x175)](_0x43debe[_0x1fb878(0x24b)]))_0x53a012[_0x1fb878(0x120)]=!![],_0x53a012[_0x1fb878(0x16e)]=Number(RegExp['$1'])||0x0;else{if(_0x2e8cb2[_0x1fb878(0x175)](_0x43debe['VertLoop'])){if(_0x1fb878(0x1b3)===_0x1fb878(0x1ff)){const _0x3fa832=_0x2c7458[_0x1fb878(0x260)][_0x1fb878(0x1af)],_0x4aa215=_0x150a7b[_0x1fb878(0x160)]||'';if(_0x4aa215[_0x1fb878(0x175)](_0x3fa832[_0x1fb878(0x1fd)]))return _0x276474['max'](0x0,_0xff1ace(_0x1a9ccc['$1'])||0x0);return _0x591f19[_0x1fb878(0x163)];}else _0x53a012[_0x1fb878(0x239)]=!![],_0x53a012[_0x1fb878(0x169)]=Number(RegExp['$1'])||0x0;}else{if(_0x2e8cb2[_0x1fb878(0x175)](_0x43debe[_0x1fb878(0x12a)]))_0x53a012[_0x1fb878(0x1e0)]=!![];else{if(_0x2e8cb2['match'](_0x43debe[_0x1fb878(0x1b1)])){if(_0x1fb878(0x203)!==_0x1fb878(0x203))_0x7d7d85[_0x1fb878(0x260)][_0x1fb878(0x22a)]['call'](this),this[_0x1fb878(0x144)](),this['updateSolidReflections']();else{const _0x36c896=Number(RegExp['$1'])*0.01;_0x53a012[_0x1fb878(0x1a0)]=Math[_0x1fb878(0x1fc)](_0x36c896*0xff)[_0x1fb878(0x12b)](0x0,0xff);}}else{if(_0x2e8cb2['match'](_0x43debe[_0x1fb878(0x14d)]))_0x1fb878(0x131)!==_0x1fb878(0x21c)?_0x53a012['opacity']=Number(RegExp['$1'])['clamp'](0x0,0xff):this['filters']=[];else{if(_0x2e8cb2['match'](_0x43debe['BlendMode'])){if('vcFOW'!==_0x1fb878(0x1d7)){const _0x3c58b7=String(RegExp['$1'])[_0x1fb878(0x13d)]()['trim'](),_0x22f2af=[_0x1fb878(0x1ea),_0x1fb878(0x1c4),_0x1fb878(0x263),_0x1fb878(0x189)];_0x53a012[_0x1fb878(0x1c7)]=_0x22f2af[_0x1fb878(0x1b9)](_0x3c58b7)[_0x1fb878(0x12b)](0x0,0x3);}else _0x38d0f2=_0x135590[_0x1fb878(0x206)](_0x4ab634,_0xd8fbbe);}else{if(_0x2e8cb2[_0x1fb878(0x175)](_0x43debe[_0x1fb878(0x124)]))'yLpHq'!==_0x1fb878(0x25d)?(this[_0x1fb878(0x1d5)][_0x1fb878(0x141)]['destroy'](),this[_0x1fb878(0x1a1)](this['_maskSprite'])):_0x53a012['hue']=Number(RegExp['$1'])[_0x1fb878(0x12b)](0x0,0x168);else{if(_0x2e8cb2[_0x1fb878(0x175)](_0x43debe[_0x1fb878(0x23e)]))_0x53a012[_0x1fb878(0x1b7)]=Number(RegExp['$1'])||0x0;else{if(_0x2e8cb2[_0x1fb878(0x175)](_0x43debe[_0x1fb878(0x1da)])){const _0xfe1ce0=String(RegExp['$1'])[_0x1fb878(0x1ad)](',')[_0x1fb878(0x13b)](_0x22db6a=>Number(_0x22db6a)||0x0);while(_0xfe1ce0[_0x1fb878(0x21b)]<0x4)_0xfe1ce0[_0x1fb878(0x26c)](0x0);_0x53a012['colorTone']=_0xfe1ce0;}else{if(_0x2e8cb2[_0x1fb878(0x175)](_0x43debe['MaskRegions'])){const _0x138c0a=String(RegExp['$1'])['split'](',')[_0x1fb878(0x13b)](_0x47628b=>Number(_0x47628b)||0x1);_0x53a012[_0x1fb878(0x15b)]=_0x138c0a;}else{if(_0x2e8cb2[_0x1fb878(0x175)](_0x43debe[_0x1fb878(0x1cb)])){if(_0x1fb878(0x166)===_0x1fb878(0x17a))this[_0x1fb878(0x1c2)]=_0x1ea1c2[_0x1fb878(0x11e)](),this['_updateColorFilter']();else{const _0x40ff52=String(RegExp['$1'])[_0x1fb878(0x1ad)](',')[_0x1fb878(0x13b)](_0x15dda0=>Number(_0x15dda0)||0x1);_0x53a012['maskTerrainTags']=_0x40ff52;}}}}}}}}}}}}}}return _0x43188e;},Game_Map[_0x48d215(0x23b)][_0x48d215(0xff)]=function(){const _0x8a05ab=_0x48d215;return this[_0x8a05ab(0x180)]===undefined&&this[_0x8a05ab(0x22d)](),this[_0x8a05ab(0x180)]['filter'](_0x28e7eb=>!!_0x28e7eb);},Game_Map['prototype'][_0x48d215(0x1a5)]=function(_0x38d19d){const _0x4d0de4=_0x48d215;return this[_0x4d0de4(0x180)]=this[_0x4d0de4(0x180)]||[],this['_visualParallaxSettings'][_0x38d19d]||null;},Game_Map[_0x48d215(0x23b)][_0x48d215(0x105)]=function(_0x2fa457){const _0x4a433c=_0x48d215,_0x42f948=this[_0x4a433c(0x1a5)](_0x2fa457);if(_0x42f948[_0x4a433c(0x1e0)])return Math['floor'](_0x42f948[_0x4a433c(0x225)]*this[_0x4a433c(0x265)]());else{if(_0x42f948['_parallaxLoopX'])return _0x42f948['_parallaxX']*this['tileWidth']()/0x2;else{if(_0x4a433c(0x155)!==_0x4a433c(0x26f))return 0x0;else{const _0x5c984b=_0xc4f445[_0x4a433c(0x260)][_0x4a433c(0x1af)],_0x19a1f8=_0x27c4fb[_0x4a433c(0x160)]||'';if(_0x19a1f8[_0x4a433c(0x175)](_0x5c984b[_0x4a433c(0x238)]))return(_0x2d1b11(_0x2261c3['$1'])||0x0)[_0x4a433c(0x12b)](0x0,0x1);return _0x141670['DEFAULT_WATER_REFLECTION_FILTER_BOUNDARY'];}}}},Game_Map['prototype'][_0x48d215(0x108)]=function(_0x110dac){const _0x4d2243=_0x48d215,_0x169029=this['getVisualParallaxSettings'](_0x110dac);if(_0x169029['_parallaxZero'])return Math[_0x4d2243(0x158)](_0x169029[_0x4d2243(0x136)]*this[_0x4d2243(0x118)]());else{if(_0x169029['_parallaxLoopY'])return _0x169029[_0x4d2243(0x136)]*this['tileHeight']()/0x2;else{if(_0x4d2243(0x138)===_0x4d2243(0x138))return 0x0;else this['_hue']=0x0,this[_0x4d2243(0x1c2)]=[0x0,0x0,0x0,0x0],this['_colorFilter']=new _0x491c1f(),!this['filters']&&(this[_0x4d2243(0x1f8)]=[]),this[_0x4d2243(0x1f8)]['push'](this[_0x4d2243(0x10a)]);}}},Game_Map[_0x48d215(0x23b)][_0x48d215(0x245)]=function(_0x301bc4){const _0xfa81c6=_0x48d215;this[_0xfa81c6(0x180)]=this['_visualParallaxSettings']||[];if(!this[_0xfa81c6(0x180)][_0x301bc4])return;this[_0xfa81c6(0x180)][_0x301bc4]=null;const _0x175117=SceneManager['_scene'][_0xfa81c6(0x1e3)];_0x175117&&_0x175117[_0xfa81c6(0x1ee)](_0x301bc4);},Game_Map[_0x48d215(0x23b)][_0x48d215(0x204)]=function(_0xed22e6){const _0x12828d=_0x48d215,_0x36834e=_0xed22e6['id'];let _0x2953a6=![];this[_0x12828d(0x180)]=this[_0x12828d(0x180)]||[];if(this['_visualParallaxSettings'][_0x36834e]){const _0x55530d=this[_0x12828d(0x180)][_0x36834e];if(!_0x55530d['maskRegions'][_0x12828d(0x256)](_0xed22e6[_0x12828d(0x15b)])){if(_0x12828d(0x10b)!=='gcIFl'){const _0x321db9=_0x92d6a8['VisualParallaxes'][_0x12828d(0x1af)],_0x2a6514=_0x247006['note']||'';if(_0x2a6514[_0x12828d(0x175)](_0x321db9['WaterAmplitude'])){const _0x60ca4e=_0x5317b4(_0x3366ca['$1'])[_0x12828d(0x1ad)](',')[_0x12828d(0x13b)](_0x2b1f61=>_0x270549(_0x2b1f61)||0x0);if(_0x60ca4e['length']<=0x1)_0x60ca4e[0x1]=_0x60ca4e[0x0];}return _0x13cf2e[_0x12828d(0x1a3)](_0x2bbfaf[_0x12828d(0x1ab)])['remove'](0x0);}else _0x2953a6=!![];}else!_0x55530d[_0x12828d(0x212)]['equals'](_0xed22e6[_0x12828d(0x212)])&&(_0x2953a6=!![]);}this[_0x12828d(0x180)][_0x36834e]=_0xed22e6;if(!SceneManager[_0x12828d(0x11b)]())return;const _0x4b978b=SceneManager[_0x12828d(0x145)]['_spriteset'];if(_0x4b978b){if(_0x12828d(0x21e)===_0x12828d(0x13f)){_0x5a314b[_0x12828d(0x23b)][_0x12828d(0x1d3)][_0x12828d(0x1ec)](this);if(!this['bitmap'])return;if(!this[_0x12828d(0x191)]())return;this[_0x12828d(0x11c)](),this[_0x12828d(0x106)](),this[_0x12828d(0x1e1)](),this['updateHue'](),this[_0x12828d(0x248)](),this[_0x12828d(0x19e)]();}else _0x4b978b[_0x12828d(0x243)](_0x36834e,_0x2953a6);}},VisuMZ[_0x48d215(0x260)][_0x48d215(0x137)]=Game_Map[_0x48d215(0x23b)][_0x48d215(0x134)],Game_Map[_0x48d215(0x23b)][_0x48d215(0x134)]=function(_0x4280c7,_0x21e4f0){const _0x54e114=_0x48d215;VisuMZ[_0x54e114(0x260)][_0x54e114(0x137)][_0x54e114(0x1ec)](this,_0x4280c7,_0x21e4f0);for(const _0x3c94a6 of this[_0x54e114(0xff)]()){if(_0x54e114(0x1e6)!==_0x54e114(0x1e6))this[_0x54e114(0x1a2)]=_0x7ae33a,_0x1ef657[_0x54e114(0x23b)][_0x54e114(0x268)]['call'](this),this[_0x54e114(0x15d)](),this['loadBitmap'](),this['bitmap'][_0x54e114(0x1a9)](this[_0x54e114(0x1a4)][_0x54e114(0x17f)](this));else{if(!_0x3c94a6)continue;if(this[_0x54e114(0x14c)]()){if(_0x54e114(0x229)!==_0x54e114(0x229))for(let _0x5817ee=0x0;_0x5817ee<_0x7295c8;_0x5817ee++){const _0x356dd4=_0x51fd3c[_0x54e114(0x13e)](_0x1ee78a,_0x5817ee);(_0x46c13c[_0x54e114(0x176)](_0x356dd4)||_0x338f29[_0x54e114(0x176)](_0x4023c3[_0x54e114(0x13a)](_0x35fd60,_0x5817ee)))&&(_0x7e57af[_0x54e114(0x141)]['fillRect'](_0x5819d0*_0x4ded7e+_0x583ffc,_0x5817ee*_0x56bc1f+_0x538a0c,_0x4c5ddb-_0x3be74a,_0x3b8c62-_0x3efbd5,_0x54e114(0x122)),_0x341e28[_0x54e114(0x213)]&&_0x3a18b2[_0x54e114(0x145)]['_grafterRefreshRegions'][_0x54e114(0x26c)](_0x356dd4));}else _0x3c94a6[_0x54e114(0x225)]=_0x4280c7;}else _0x54e114(0x12c)===_0x54e114(0x1c0)?this[_0x54e114(0x1a0)]=this['settings']()[_0x54e114(0x1a0)]:_0x3c94a6[_0x54e114(0x225)]=this[_0x54e114(0x219)];this[_0x54e114(0x227)]()?_0x3c94a6[_0x54e114(0x136)]=_0x21e4f0:_0x54e114(0x244)===_0x54e114(0x244)?_0x3c94a6[_0x54e114(0x136)]=this['_displayY']:(this[_0x54e114(0x148)][_0x54e114(0x1a1)](this[_0x54e114(0x154)]),this['_solidReflectAdded']=![]);}}},VisuMZ['VisualParallaxes'][_0x48d215(0x23d)]=Game_Map[_0x48d215(0x23b)][_0x48d215(0x121)],Game_Map[_0x48d215(0x23b)]['scrollLeft']=function(_0x2bffa0){const _0x1057bb=_0x48d215,_0x181d4a=this[_0x1057bb(0x219)];VisuMZ[_0x1057bb(0x260)][_0x1057bb(0x23d)][_0x1057bb(0x1ec)](this,_0x2bffa0);for(const _0x507b2d of this['getVisualParallaxes']()){if(!_0x507b2d)continue;if(this[_0x1057bb(0x14c)]()){if(_0x1057bb(0x237)===_0x1057bb(0x1f9))return{'id':0x0,'filename':'','_parallaxZero':![],'_parallaxLoopX':![],'_parallaxLoopY':![],'_parallaxSx':0x0,'_parallaxSy':0x0,'_parallaxX':0x0,'_parallaxY':0x0,'opacity':0xff,'targetOpacity':0xff,'opacityDuration':0x0,'blendMode':0x0,'hue':0x0,'hueShift':0x0,'colorTone':[0x0,0x0,0x0,0x0],'maskRegions':[],'maskTerrainTags':[]};else _0x507b2d[_0x1057bb(0x120)]&&(_0x507b2d['_parallaxX']-=_0x2bffa0);}else this[_0x1057bb(0x139)]()>=this['screenTileX']()&&(_0x1057bb(0x101)===_0x1057bb(0x101)?_0x507b2d[_0x1057bb(0x225)]+=this[_0x1057bb(0x219)]-_0x181d4a:_0x5c3efb[_0x1057bb(0x15b)]=_0x3e88b8[_0x1057bb(0x1a3)](_0x20ecdb[_0x1057bb(0x19c)]()));}},VisuMZ[_0x48d215(0x260)][_0x48d215(0x152)]=Game_Map['prototype'][_0x48d215(0x16b)],Game_Map['prototype'][_0x48d215(0x16b)]=function(_0x434db9){const _0x452608=_0x48d215,_0x8ba2ae=this[_0x452608(0x219)];VisuMZ['VisualParallaxes'][_0x452608(0x152)][_0x452608(0x1ec)](this,_0x434db9);for(const _0x126fb7 of this[_0x452608(0xff)]()){if(_0x452608(0x196)!==_0x452608(0x208)){if(!_0x126fb7)continue;if(this[_0x452608(0x14c)]())_0x452608(0x17c)===_0x452608(0x272)?this[_0x452608(0x258)]=!![]:_0x126fb7['_parallaxLoopX']&&(_0x452608(0x222)===_0x452608(0x1f6)?_0x9d5800=!![]:_0x126fb7[_0x452608(0x225)]+=_0x434db9);else this[_0x452608(0x139)]()>=this['screenTileX']()&&(_0x126fb7[_0x452608(0x225)]+=this[_0x452608(0x219)]-_0x8ba2ae);}else{const _0x5bbd51=this[_0x452608(0x1a5)](_0x384040);if(_0x5bbd51['_parallaxZero'])return _0x4a00b9[_0x452608(0x158)](_0x5bbd51[_0x452608(0x136)]*this[_0x452608(0x118)]());else return _0x5bbd51[_0x452608(0x239)]?_0x5bbd51[_0x452608(0x136)]*this[_0x452608(0x118)]()/0x2:0x0;}}},VisuMZ[_0x48d215(0x260)][_0x48d215(0x257)]=Game_Map[_0x48d215(0x23b)][_0x48d215(0x1de)],Game_Map[_0x48d215(0x23b)][_0x48d215(0x1de)]=function(_0x2e3ba8){const _0xd7dbca=_0x48d215,_0x121ad0=this[_0xd7dbca(0x103)];VisuMZ[_0xd7dbca(0x260)]['Game_Map_scrollDown'][_0xd7dbca(0x1ec)](this,_0x2e3ba8);for(const _0x262e48 of this['getVisualParallaxes']()){if(!_0x262e48)continue;if(this['isLoopVertical']())_0xd7dbca(0x22e)!==_0xd7dbca(0x22e)?(_0x39df26[_0xd7dbca(0x239)]=!![],_0x402f1c[_0xd7dbca(0x169)]=_0x40fdfd(_0x4f82ad['$1'])||0x0):_0x262e48[_0xd7dbca(0x239)]&&('INykx'===_0xd7dbca(0x1c9)?(_0x1b1e82['maskRegions'][_0xd7dbca(0x21b)]<=0x0&&(_0x9ef1e0[_0xd7dbca(0x15b)]=_0x5f2708['makeDeepCopy'](_0x5ac3f8[_0xd7dbca(0x1f1)]())),_0x5b1e5d[_0xd7dbca(0x212)]['length']<=0x0&&(_0x7ae733['maskTerrainTags']=_0x443c21[_0xd7dbca(0x1a3)](_0x267e61['getSolidReflectionTerrainTags']()))):_0x262e48[_0xd7dbca(0x136)]+=_0x2e3ba8);else this[_0xd7dbca(0x1dc)]()>=this[_0xd7dbca(0x127)]()&&(_0x262e48[_0xd7dbca(0x136)]+=this[_0xd7dbca(0x103)]-_0x121ad0);}},VisuMZ[_0x48d215(0x260)][_0x48d215(0x1c1)]=Game_Map[_0x48d215(0x23b)][_0x48d215(0x242)],Game_Map['prototype'][_0x48d215(0x242)]=function(_0xf3da4a){const _0x4fb1d8=_0x48d215,_0x1c79ef=this[_0x4fb1d8(0x103)];VisuMZ[_0x4fb1d8(0x260)][_0x4fb1d8(0x1c1)][_0x4fb1d8(0x1ec)](this,_0xf3da4a);for(const _0x24e92c of this[_0x4fb1d8(0xff)]()){if(!_0x24e92c)continue;if(this[_0x4fb1d8(0x227)]())_0x24e92c[_0x4fb1d8(0x239)]&&('BwKze'==='Bxxcw'?(_0x211876(_0x4fb1d8(0x253)['format'](_0x1a5e07,_0x277895)),_0x300669['exit']()):_0x24e92c[_0x4fb1d8(0x136)]-=_0xf3da4a);else{if(this['height']()>=this[_0x4fb1d8(0x127)]()){if(_0x4fb1d8(0x193)!==_0x4fb1d8(0x218))_0x24e92c[_0x4fb1d8(0x136)]+=this[_0x4fb1d8(0x103)]-_0x1c79ef;else{const _0x56eb10=_0x45bb30(_0x8449c7['$1'])[_0x4fb1d8(0x13d)]()[_0x4fb1d8(0x12d)](),_0xae1e67=[_0x4fb1d8(0x1ea),_0x4fb1d8(0x1c4),_0x4fb1d8(0x263),_0x4fb1d8(0x189)];_0x1abdae[_0x4fb1d8(0x1c7)]=_0xae1e67[_0x4fb1d8(0x1b9)](_0x56eb10)[_0x4fb1d8(0x12b)](0x0,0x3);}}}}},VisuMZ[_0x48d215(0x260)][_0x48d215(0x209)]=Game_Map['prototype'][_0x48d215(0x1fb)],Game_Map[_0x48d215(0x23b)][_0x48d215(0x1fb)]=function(){const _0x377dfe=_0x48d215;VisuMZ[_0x377dfe(0x260)][_0x377dfe(0x209)][_0x377dfe(0x1ec)](this);for(const _0x1ac3ff of this[_0x377dfe(0xff)]()){if('QnWTw'!=='QnWTw'){const _0x35195a=_0x3dee7f[_0x377dfe(0x13e)](_0x4533f6,_0x5e827f);(_0x22961a[_0x377dfe(0x176)](_0x35195a)||_0x581681[_0x377dfe(0x176)](_0x2a4d36[_0x377dfe(0x13a)](_0x6b495b,_0x16508d)))&&(this[_0x377dfe(0x1d5)][_0x377dfe(0x141)][_0x377dfe(0x187)](_0x206576*_0x15433e,_0x312f32*_0x3ec8e3,_0xfb98ef,_0x568126,'#ffffff'),_0x386bf3['VisuMZ_2_TileGrafterSystem']&&_0x3a12f8[_0x377dfe(0x145)]['_grafterRefreshRegions']['push'](_0x35195a));}else{if(!_0x1ac3ff)continue;this[_0x377dfe(0x261)](_0x1ac3ff);}}},Game_Map[_0x48d215(0x23b)]['updateVisualParallaxSettings']=function(_0x307e70){const _0x1b2cc5=_0x48d215;if(_0x307e70['_parallaxLoopX']){if(_0x1b2cc5(0x1f2)===_0x1b2cc5(0x1f2))_0x307e70[_0x1b2cc5(0x225)]+=_0x307e70[_0x1b2cc5(0x16e)]/this[_0x1b2cc5(0x265)]()/0x2;else return _0x5e5535['round']((_0x4d1784(_0x43f927['$1'])||0x0)*0.01*0xff)[_0x1b2cc5(0x12b)](0x0,0xff);}if(_0x307e70['_parallaxLoopY']){if(_0x1b2cc5(0x181)!==_0x1b2cc5(0x181))return _0xb88ddf['max'](0x0,_0x6b669a(_0x52cecd['$1'])||0x0);else _0x307e70[_0x1b2cc5(0x136)]+=_0x307e70[_0x1b2cc5(0x169)]/this[_0x1b2cc5(0x118)]()/0x2;}_0x307e70[_0x1b2cc5(0x147)]+=_0x307e70['hueShift'];if(_0x307e70['opacityDuration']>0x0){const _0xa1f479=_0x307e70[_0x1b2cc5(0x252)];_0x307e70[_0x1b2cc5(0x1a0)]=(_0x307e70[_0x1b2cc5(0x1a0)]*(_0xa1f479-0x1)+_0x307e70['targetOpacity'])/_0xa1f479,_0x307e70[_0x1b2cc5(0x252)]--;}},VisuMZ['VisualParallaxes']['Game_Event_clearPageSettings']=Game_Event['prototype']['clearPageSettings'],Game_Event['prototype'][_0x48d215(0x194)]=function(){const _0x1351bb=_0x48d215;VisuMZ['VisualParallaxes'][_0x1351bb(0x226)]['call'](this),this[_0x1351bb(0x1b6)]();},VisuMZ[_0x48d215(0x260)][_0x48d215(0x17e)]=Game_Event[_0x48d215(0x23b)][_0x48d215(0x201)],Game_Event['prototype']['setupPageSettings']=function(){const _0x3c5597=_0x48d215;VisuMZ['VisualParallaxes'][_0x3c5597(0x17e)]['call'](this),this[_0x3c5597(0x1b2)]();},Game_Event[_0x48d215(0x23b)]['setupVisualParallaxesEffects']=function(){const _0x2c5202=_0x48d215;if(!this[_0x2c5202(0x12e)]())return;this['initVisualParallaxesEffects'](),this[_0x2c5202(0x200)](),this[_0x2c5202(0x25e)]();},Game_Event[_0x48d215(0x23b)]['setupVisualParallaxesNotetags']=function(){const _0x506e50=_0x48d215,_0x4347c9=this['event']()[_0x506e50(0x160)];if(_0x4347c9==='')return;this[_0x506e50(0x1f0)](_0x4347c9);},Game_Event[_0x48d215(0x23b)]['setupVisualParallaxesCommentTags']=function(){const _0x13649f=_0x48d215;if(!this[_0x13649f(0x207)]())return;const _0x4a2b1a=this['list']();let _0x4c3b11='';for(const _0x509651 of _0x4a2b1a){if([0x6c,0x198][_0x13649f(0x176)](_0x509651[_0x13649f(0x192)])){if(_0x4c3b11!=='')_0x4c3b11+='\x0a';_0x4c3b11+=_0x509651[_0x13649f(0x1f7)][0x0];}}this[_0x13649f(0x1f0)](_0x4c3b11);},Game_Event[_0x48d215(0x23b)][_0x48d215(0x1b6)]=function(){const _0x5d79e3=_0x48d215;this[_0x5d79e3(0x116)]=![];},Game_Event[_0x48d215(0x23b)][_0x48d215(0x1f0)]=function(_0x4c8b49){const _0x466bd4=_0x48d215,_0x3162c6=VisuMZ[_0x466bd4(0x260)][_0x466bd4(0x1af)];_0x4c8b49[_0x466bd4(0x175)](_0x3162c6[_0x466bd4(0x126)])&&(this[_0x466bd4(0x116)]=!![]);};function Sprite_VisualParallax(){const _0x31f1c3=_0x48d215;this[_0x31f1c3(0x268)](...arguments);}Sprite_VisualParallax[_0x48d215(0x23b)]=Object[_0x48d215(0x115)](TilingSprite[_0x48d215(0x23b)]),Sprite_VisualParallax['prototype'][_0x48d215(0x130)]=Sprite_VisualParallax,Sprite_VisualParallax['prototype'][_0x48d215(0x268)]=function(_0x5b3440){const _0x483c3d=_0x48d215;this[_0x483c3d(0x1a2)]=_0x5b3440,TilingSprite[_0x483c3d(0x23b)]['initialize'][_0x483c3d(0x1ec)](this),this[_0x483c3d(0x15d)](),this[_0x483c3d(0x16f)](),this[_0x483c3d(0x141)][_0x483c3d(0x1a9)](this[_0x483c3d(0x1a4)][_0x483c3d(0x17f)](this));},Sprite_VisualParallax[_0x48d215(0x23b)][_0x48d215(0x191)]=function(){const _0x2eda7b=_0x48d215;return $gameMap[_0x2eda7b(0x1a5)](this[_0x2eda7b(0x1a2)]);},Sprite_VisualParallax[_0x48d215(0x23b)][_0x48d215(0x15d)]=function(){const _0x1e17bd=_0x48d215;this[_0x1e17bd(0x164)]=0x0,this[_0x1e17bd(0x1c2)]=[0x0,0x0,0x0,0x0],this['_colorFilter']=new ColorFilter(),!this['filters']&&(this[_0x1e17bd(0x1f8)]=[]),this[_0x1e17bd(0x1f8)][_0x1e17bd(0x26c)](this['_colorFilter']);},Sprite_VisualParallax[_0x48d215(0x23b)][_0x48d215(0x167)]=function(){const _0x11c064=_0x48d215;if(!this['_colorFilter']){if(_0x11c064(0x23a)!==_0x11c064(0x107))this[_0x11c064(0x15d)]();else{const _0x40e65e=_0x17eaa1['VisualParallaxes']['RegExp'],_0x25d4d2=_0x57368d[_0x11c064(0x160)]||'';if(_0x25d4d2[_0x11c064(0x175)](_0x40e65e[_0x11c064(0x1d6)]))return _0x2fde92(_0x5d8eb2['$1'])[_0x11c064(0x1ad)](',')[_0x11c064(0x13b)](_0x2d67f6=>_0x10c1d4(_0x2d67f6)||0x1)[_0x11c064(0x16a)](0x0);return _0x116872[_0x11c064(0x1a3)](_0x497a4a[_0x11c064(0x20f)])[_0x11c064(0x16a)](0x0);}}this[_0x11c064(0x10a)]['setHue'](this[_0x11c064(0x164)]),this['_colorFilter']['setColorTone'](this['_colorTone']);},Sprite_VisualParallax[_0x48d215(0x23b)][_0x48d215(0x16f)]=function(){const _0x3cbdd3=_0x48d215;this[_0x3cbdd3(0x15c)]=this[_0x3cbdd3(0x191)]()[_0x3cbdd3(0x1dd)],this[_0x3cbdd3(0x141)]=ImageManager['loadParallax'](this[_0x3cbdd3(0x15c)]);},Sprite_VisualParallax['prototype']['createMaskSprite']=function(){const _0x404386=_0x48d215;this[_0x404386(0x1d5)]=new Sprite(),this[_0x404386(0x17d)]();},Sprite_VisualParallax[_0x48d215(0x23b)][_0x48d215(0x17d)]=function(){const _0x501467=_0x48d215;this['_maskSprite'][_0x501467(0x141)]&&(_0x501467(0x264)!==_0x501467(0x264)?_0x43eec6[_0x501467(0x225)]=this[_0x501467(0x219)]:(this[_0x501467(0x1d5)][_0x501467(0x141)]['destroy'](),this[_0x501467(0x1a1)](this[_0x501467(0x1d5)])));const _0x364816=new Bitmap(Graphics['width'],Graphics[_0x501467(0x1dc)]);_0x364816[_0x501467(0x187)](0x0,0x0,_0x364816[_0x501467(0x139)],_0x364816[_0x501467(0x1dc)],'#ffffff'),this[_0x501467(0x1d5)][_0x501467(0x141)]=_0x364816,this[_0x501467(0x14b)](this[_0x501467(0x1d5)]),this[_0x501467(0x1b5)]=new PIXI[(_0x501467(0x135))](this[_0x501467(0x1d5)]),this[_0x501467(0x1f8)][_0x501467(0x26c)](this[_0x501467(0x1b5)]);const _0x5a8012=this[_0x501467(0x191)]()['maskRegions'],_0x5d5f97=this[_0x501467(0x191)]()[_0x501467(0x212)];if(_0x5a8012['length']<=0x0&&_0x5d5f97[_0x501467(0x21b)]<=0x0)return;if($gameMap[_0x501467(0x14c)]()||$gameMap[_0x501467(0x227)]())return;const _0x3cea31=$gameMap[_0x501467(0x139)](),_0x5ea422=$gameMap['height'](),_0x3ffd7b=$gameMap[_0x501467(0x265)](),_0x456fd3=$gameMap[_0x501467(0x118)]();this[_0x501467(0x1d5)][_0x501467(0x141)]=new Bitmap(_0x3cea31*_0x3ffd7b,_0x5ea422*_0x456fd3);for(let _0x48850d=0x0;_0x48850d<_0x3cea31;_0x48850d++){for(let _0x1e8217=0x0;_0x1e8217<_0x5ea422;_0x1e8217++){const _0x136316=$gameMap[_0x501467(0x13e)](_0x48850d,_0x1e8217);if(_0x5a8012[_0x501467(0x176)](_0x136316)||_0x5d5f97[_0x501467(0x176)]($gameMap[_0x501467(0x13a)](_0x48850d,_0x1e8217))){if(_0x501467(0x177)==='cJjmJ')this['_maskSprite'][_0x501467(0x141)][_0x501467(0x187)](_0x48850d*_0x3ffd7b,_0x1e8217*_0x456fd3,_0x3ffd7b,_0x456fd3,_0x501467(0x122)),Imported['VisuMZ_2_TileGrafterSystem']&&SceneManager[_0x501467(0x145)][_0x501467(0x195)]['push'](_0x136316);else{if(!_0x766ad9[_0x501467(0x1f8)])return;if(_0x499c09['isLoopHorizontal']()||_0x14bab2[_0x501467(0x227)]())return;if(_0x1f7091['noReflections']())return;this[_0x501467(0x140)]=new _0x10fc06(),this[_0x501467(0x235)]=new _0xbb8a06(),this[_0x501467(0x104)]=![],this[_0x501467(0x150)][_0x501467(0x14b)](this[_0x501467(0x140)]),this[_0x501467(0x140)][_0x501467(0x1f8)]=[],this[_0x501467(0x140)][_0x501467(0x1a0)]=_0x42a97b[_0x501467(0x26d)](),!!_0x52aa65[_0x501467(0x1f8)][_0x501467(0x1c6)]&&(this[_0x501467(0x140)][_0x501467(0x202)]=new _0xe30a79[(_0x501467(0x1f8))][(_0x501467(0x1c6))]({'boundary':_0x538ade[_0x501467(0x1f5)](),'amplitude':_0xf7387b[_0x501467(0x168)](),'waveLength':_0x56b449['getWaterReflectionWavelength'](),'mirror':![]})),!!_0x42c282[_0x501467(0x1f8)][_0x501467(0x18a)]&&(this['_waterReflectLayer'][_0x501467(0x1c8)]=new _0xed98fb[(_0x501467(0x1f8))]['BlurFilter'](_0x3a98b4[_0x501467(0x1bf)]()),this[_0x501467(0x140)][_0x501467(0x1f8)]['push'](this['_waterReflectLayer']['_blurFilter'])),this[_0x501467(0x188)]();}}}}},Sprite_VisualParallax[_0x48d215(0x23b)]['update']=function(){const _0x407a9d=_0x48d215;TilingSprite[_0x407a9d(0x23b)]['update'][_0x407a9d(0x1ec)](this);if(!this[_0x407a9d(0x141)])return;if(!this[_0x407a9d(0x191)]())return;this[_0x407a9d(0x11c)](),this['updateOrigin'](),this[_0x407a9d(0x1e1)](),this[_0x407a9d(0x1fa)](),this['updateTone'](),this[_0x407a9d(0x19e)]();},Sprite_VisualParallax[_0x48d215(0x23b)]['updateOpacity']=function(){const _0x19cd21=_0x48d215;this[_0x19cd21(0x1a0)]=this[_0x19cd21(0x191)]()[_0x19cd21(0x1a0)];},Sprite_VisualParallax[_0x48d215(0x23b)][_0x48d215(0x106)]=function(){const _0x5a3338=_0x48d215;this['origin']['x']=$gameMap[_0x5a3338(0x105)](this['_id']),this[_0x5a3338(0x1a8)]['y']=$gameMap['getVisualParallaxOy'](this[_0x5a3338(0x1a2)]);},Sprite_VisualParallax[_0x48d215(0x23b)][_0x48d215(0x1e1)]=function(){const _0x4a24e0=_0x48d215;if(this['_maskFilter']){if('cAGAV'==='XxSYy'){const _0x166df4=_0xa4fd51[_0x4a24e0(0x260)]['RegExp'],_0xec3981=_0x6f2265[_0x4a24e0(0x160)]||'';if(_0xec3981[_0x4a24e0(0x175)](_0x166df4[_0x4a24e0(0x259)]))return _0x85a33(_0x3dabe2['$1'])['split'](',')[_0x4a24e0(0x13b)](_0x294f21=>_0x33a0ad(_0x294f21)||0x1)['remove'](0x0);return _0x168680[_0x4a24e0(0x1a3)](_0x213644[_0x4a24e0(0x111)])[_0x4a24e0(0x16a)](0x0);}else this[_0x4a24e0(0x1b5)]['blendMode']=this[_0x4a24e0(0x191)]()[_0x4a24e0(0x1c7)];}},Sprite_VisualParallax[_0x48d215(0x23b)][_0x48d215(0x1fa)]=function(){const _0x3da5e6=_0x48d215;this[_0x3da5e6(0x165)](this['settings']()['hue']);},Sprite_VisualParallax['prototype'][_0x48d215(0x165)]=function(_0x51a270){const _0x5c4514=_0x48d215;if(this[_0x5c4514(0x164)]!==Number(_0x51a270)){if(_0x5c4514(0x22c)!=='WxMWX'){const _0x1f388e=_0x1d6681['VisualParallaxes'][_0x5c4514(0x1af)],_0x168b91=_0x2404f6[_0x5c4514(0x160)]||'';if(_0x168b91[_0x5c4514(0x175)](_0x1f388e[_0x5c4514(0x119)]))return _0xf3a2f0[_0x5c4514(0x206)](0x0,_0x5417cc(_0x15f3ae['$1'])||0x0);return _0x435bd5[_0x5c4514(0x183)];}else this[_0x5c4514(0x164)]=Number(_0x51a270),this[_0x5c4514(0x167)]();}},Sprite_VisualParallax['prototype'][_0x48d215(0x248)]=function(){const _0x386dbc=_0x48d215;this[_0x386dbc(0x159)](this['settings']()[_0x386dbc(0x1eb)]);},Sprite_VisualParallax['prototype'][_0x48d215(0x159)]=function(_0x5b837c){const _0x1f4747=_0x48d215;if(!(_0x5b837c instanceof Array))throw new Error(_0x1f4747(0x162));!this[_0x1f4747(0x1c2)][_0x1f4747(0x256)](_0x5b837c)&&(this['_colorTone']=_0x5b837c['clone'](),this[_0x1f4747(0x167)]());},Sprite_VisualParallax[_0x48d215(0x23b)][_0x48d215(0x19e)]=function(){const _0x59a957=_0x48d215;if(!this[_0x59a957(0x1d5)])return;const _0x121c60=this[_0x59a957(0x191)]()['maskRegions'],_0xb2923a=this[_0x59a957(0x191)]()['maskTerrainTags'];if(_0x121c60['length']<=0x0&&_0xb2923a['length']<=0x0)return;if($gameMap[_0x59a957(0x14c)]()||$gameMap[_0x59a957(0x227)]())return;this[_0x59a957(0x1d5)]['x']=Math[_0x59a957(0x158)](-$gameMap['displayX']()*$gameMap['tileWidth']()),this[_0x59a957(0x1d5)]['y']=Math[_0x59a957(0x158)](-$gameMap['displayY']()*$gameMap[_0x59a957(0x118)]());};function Sprite_ReflectionCharacter(){this['initialize'](...arguments);}function _0xb4e6(){const _0x16b4ee=['lTErs','VisualParallaxes','updateVisualParallaxSettings','Opacity','MULTIPLY','dPasL','tileWidth','_reflection','_parallaxContainer','initialize','charAt','water','getSolidReflectionTop','push','getWaterReflectionOpacity','parse','awqEw','followers','SolidTerrainTags','zjxJx','hasSolidReflections','getVisualParallaxes','dFeZw','koswU','createParallaxLayers','_displayY','_waterReflectAdded','getVisualParallaxOx','updateOrigin','nDerH','getVisualParallaxOy','isInstanceOfSceneMap','_colorFilter','gcIFl','reverseData','TiveT','updateScaleBase','TMfvI','gHGRD','DEFAULT_SOLID_REFLECTION_REGIONS','children','hSXKU','EVAL','create','_noReflection','Spriteset_Map_createCharacters','tileHeight','SolidBlur','getWaterReflectionTop','isSceneMap','updateOpacity','1078074uFgvrO','clone','targetOpacity','_parallaxLoopX','scrollLeft','#ffffff','>>>ATTENTION<<<','Hue','sortVisualParallaxes','NoReflection','screenTileY','2809840ZqvghH','getWaterReflectionWavelength','ScrollLock','clamp','YJDRD','trim','event','EdDgk','constructor','kxdyL','DEFAULT_WATER_REFLECTION_FILTER_BOUNDARY','ARRAYFUNC','setDisplayPos','SpriteMaskFilter','_parallaxY','Game_Map_setDisplayPos','mAorp','width','terrainTag','map','qMxKW','toUpperCase','regionId','FMolk','_waterReflectLayer','bitmap','trFAF','SolidBottom','updateWaterReflections','_scene','wasolidter','hue','_solidReflectLayer','time','PJiWG','addChild','isLoopHorizontal','OpacityFlat','WaterOpacityFlat','hasOwnProperty','_baseSprite','createParallax','Game_Map_scrollRight','getSolidReflectionBlur','_solidReflectContainer','Jpiwo','NEoii','QpVff','floor','setColorTone','WaterReflect','maskRegions','_parallaxName','_createColorFilter','owzXb','findTargetVisualParallax','note','vehicles','Argument\x20must\x20be\x20an\x20array','DEFAULT_WATER_REFLECTION_FILTER_BLUR','_hue','setHue','EZedi','_updateColorFilter','getWaterReflectionAmplitude','_parallaxSy','remove','scrollRight','displayX','QPNVE','_parallaxSx','loadBitmap','Optional','JSON','exit','WQaDa','version','match','includes','cJjmJ','_scaleX','VRRWb','ecpJF','5795372zddZbf','OuWGY','createMaskBitmap','Game_Event_setupPageSettings','bind','_visualParallaxSettings','qYnnM','ARRAYSTR','DEFAULT_SOLID_REFLECTION_FILTER_BLUR','TerrainTags','zAWqS','IrMqv','fillRect','createWaterReflectionMask','SCREEN','BlurFilter','Filename','tpfhb','createCharacters','FUNC','SolidOpacityFlat','bPAYG','settings','code','CiwBS','clearPageSettings','_grafterRefreshRegions','twNYb','SolidTop','createParallaxContainer','gidhd','ZTCzy','kTUmi','getWaterReflectionRegions','XjSGV','updateMask','setupRadialLight','opacity','removeChild','_id','makeDeepCopy','createMaskSprite','getVisualParallaxSettings','type','ErrAK','origin','addLoadListener','eBClt','DEFAULT_WATER_REFLECTION_FILTER_AMPLITUDE','name','split','7158978wPRusd','RegExp','SolidReflect','OpacityRate','setupVisualParallaxesEffects','fsEqM','DEFAULT_SOLID_REFLECTION_FILTER_OPACITY','_maskFilter','initVisualParallaxesEffects','hueShift','description','indexOf','1448915MrtALo','ZqttG','_hasSolidReflections','noReflections','getWaterReflectionTerrainTags','getWaterReflectionBlur','ADowN','Game_Map_scrollUp','_colorTone','iZMas','ADDITIVE','ARRAYSTRUCT','ReflectionFilter','blendMode','_blurFilter','XpuoB','NiTAm','MaskTerrainTags','vsGDj','isEventTest','createSolidReflectionLayer','DEFAULT_WATER_REFLECTION_TERRAINTAGS','displayY','setup','ConvertParams','update','getSolidReflectionOpacity','_maskSprite','WaterRegions','GTjLP','aTlCG','ParallaxAddChangeSettings','Tone','asBcS','height','filename','scrollDown','filter','_parallaxZero','updateBlendMode','%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.','_spriteset','NUM','DEFAULT_SOLID_REFLECTION_FILTER_TOP','ZnMRW','ParallaxFadeOpacity','createNewParallaxLayer','hasWaterReflections','NORMAL','colorTone','call','NNEyV','removeVisualParallaxLayer','WeFtK','checkVisualParallaxesStringTags','getSolidReflectionRegions','Gttzf','scale','registerReflectionSettings','getWaterReflectionBoundary','OSByM','parameters','filters','ehxLq','updateHue','updateParallax','round','WaterBlur','DEFAULT_SOLID_REFLECTION_TERRAINTAGS','WHxWK','setupVisualParallaxesNotetags','setupPageSettings','_reflectFilter','QvsgF','addChangeVisualParallax','Regions','max','page','RCOxh','Game_Map_updateParallax','updateSolidReflections','AmpEnd','Top','Boundary','_mask','DEFAULT_WATER_REFLECTION_REGIONS','Game_Map_setup','find','maskTerrainTags','VisuMZ_2_TileGrafterSystem','ARRAYNUM','Spriteset_Map_createParallax','TemplateSettings','_parallaxDataRef','hbjMJ','_displayX','registerCommand','length','dCreH','_character','Tathc','WaterAmplitude','list','DEFAULT_WATER_REFLECTION_FILTER_WAVELENGTH','pdYSs','events','Settings','_parallaxX','Game_Event_clearPageSettings','isLoopVertical','Blur','LVVly','Spriteset_Map_update','mpWNO','WxMWX','setupVisualParallaxes','VBvVI','WaveEnd','_solidReflectAdded','createWaterReflectionLayer','oErlr','CtwCg','createReflectionMask','_waterReflectContainer','format','dWPKR','WaterBoundary','_parallaxLoopY','DnpVT','prototype','2206677JdDHsD','Game_Map_scrollLeft','HueShift','mAXme','2094498sPLEmq','CreateLayerData','scrollUp','updateVisualParallaxLayer','rGvII','removeVisualParallax','createCharacterReflections','ErAGh','updateTone','WaterTop','WaveStart','HorzLoop','SolidOpacityRate','createSolidReflectionMask','mask','getSolidReflectionTerrainTags','sbNoZ','FRhqB','opacityDuration','%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.','DouWi','AmpStart','equals','Game_Map_scrollDown','_hasWaterReflections','SolidRegions','move','LlLDQ','sort','yLpHq','setupVisualParallaxesCommentTags'];_0xb4e6=function(){return _0x16b4ee;};return _0xb4e6();}Sprite_ReflectionCharacter[_0x48d215(0x23b)]=Object[_0x48d215(0x115)](Sprite_Character[_0x48d215(0x23b)]),Sprite_ReflectionCharacter[_0x48d215(0x23b)]['constructor']=Sprite_ReflectionCharacter,Sprite_ReflectionCharacter[_0x48d215(0x23b)][_0x48d215(0x19f)]=function(_0x1ade26){},Sprite_ReflectionCharacter['prototype'][_0x48d215(0x1d3)]=function(){const _0x5877fb=_0x48d215;Sprite_Character['prototype'][_0x5877fb(0x1d3)][_0x5877fb(0x1ec)](this);},Sprite_ReflectionCharacter[_0x48d215(0x23b)][_0x48d215(0x10e)]=function(){const _0x3d8fcb=_0x48d215;this[_0x3d8fcb(0x1f3)]['x']=this['_character'][_0x3d8fcb(0x178)],this[_0x3d8fcb(0x1f3)]['y']=-this[_0x3d8fcb(0x21d)]['_scaleY'];},VisuMZ[_0x48d215(0x260)]['Spriteset_Map_createParallax']=Spriteset_Map['prototype']['createParallax'],Spriteset_Map[_0x48d215(0x23b)][_0x48d215(0x151)]=function(){const _0x105478=_0x48d215;VisuMZ[_0x105478(0x260)][_0x105478(0x215)][_0x105478(0x1ec)](this);if(!$gameMap[_0x105478(0x11a)]())this[_0x105478(0x231)]();if(!$gameMap[_0x105478(0x1f1)]())this['createSolidReflectionLayer']();this[_0x105478(0x198)](),this[_0x105478(0x102)](),this['sortVisualParallaxes']();if($gameMap[_0x105478(0x11a)]())this[_0x105478(0x231)]();if($gameMap['getSolidReflectionRegions']())this['createSolidReflectionLayer']();},Spriteset_Map['prototype'][_0x48d215(0x231)]=function(){const _0x3eafcb=_0x48d215;if(!PIXI[_0x3eafcb(0x1f8)])return;if($gameMap[_0x3eafcb(0x14c)]()||$gameMap[_0x3eafcb(0x227)]())return;if($gameMap[_0x3eafcb(0x1bd)]())return;this[_0x3eafcb(0x140)]=new Sprite(),this[_0x3eafcb(0x235)]=new Sprite(),this['_waterReflectAdded']=![],this[_0x3eafcb(0x150)]['addChild'](this[_0x3eafcb(0x140)]),this[_0x3eafcb(0x140)][_0x3eafcb(0x1f8)]=[],this[_0x3eafcb(0x140)][_0x3eafcb(0x1a0)]=$gameMap['getWaterReflectionOpacity'](),!!PIXI[_0x3eafcb(0x1f8)][_0x3eafcb(0x1c6)]&&(this['_waterReflectLayer']['_reflectFilter']=new PIXI[(_0x3eafcb(0x1f8))][(_0x3eafcb(0x1c6))]({'boundary':$gameMap[_0x3eafcb(0x1f5)](),'amplitude':$gameMap[_0x3eafcb(0x168)](),'waveLength':$gameMap['getWaterReflectionWavelength'](),'mirror':![]})),!!PIXI[_0x3eafcb(0x1f8)][_0x3eafcb(0x18a)]&&('UkErO'==='UkErO'?(this[_0x3eafcb(0x140)][_0x3eafcb(0x1c8)]=new PIXI[(_0x3eafcb(0x1f8))][(_0x3eafcb(0x18a))]($gameMap[_0x3eafcb(0x1bf)]()),this[_0x3eafcb(0x140)][_0x3eafcb(0x1f8)][_0x3eafcb(0x26c)](this[_0x3eafcb(0x140)][_0x3eafcb(0x1c8)])):this[_0x3eafcb(0x15d)]()),this[_0x3eafcb(0x188)]();},Spriteset_Map[_0x48d215(0x23b)][_0x48d215(0x188)]=function(){const _0xae6090=_0x48d215,_0x4ee06d=$gameMap[_0xae6090(0x19c)](),_0x187f60=$gameMap[_0xae6090(0x1be)](),_0x30e07a=this[_0xae6090(0x234)](_0x4ee06d,_0x187f60);if(_0x30e07a){if(_0xae6090(0x1ca)!==_0xae6090(0x1ca))return _0x5e98a4(_0xf98b80['$1'])[_0xae6090(0x1ad)](',')[_0xae6090(0x13b)](_0x4de8d6=>_0x12f00a(_0x4de8d6)||0x1)[_0xae6090(0x16a)](0x0);else this[_0xae6090(0x14b)](_0x30e07a),this[_0xae6090(0x140)]['mask']=_0x30e07a;}},Spriteset_Map[_0x48d215(0x23b)][_0x48d215(0x1ce)]=function(){const _0x420edc=_0x48d215;if(!PIXI['filters'])return;if($gameMap[_0x420edc(0x14c)]()||$gameMap['isLoopVertical']())return;if($gameMap[_0x420edc(0x1bd)]())return;this[_0x420edc(0x148)]=new Sprite(),this['_solidReflectContainer']=new Sprite(),this[_0x420edc(0x230)]=![],this[_0x420edc(0x150)][_0x420edc(0x14b)](this['_solidReflectLayer']),this[_0x420edc(0x148)][_0x420edc(0x1f8)]=[],this[_0x420edc(0x148)][_0x420edc(0x1a0)]=$gameMap['getSolidReflectionOpacity'](),!!PIXI[_0x420edc(0x1f8)][_0x420edc(0x18a)]&&(this['_solidReflectLayer'][_0x420edc(0x1c8)]=new PIXI[(_0x420edc(0x1f8))][(_0x420edc(0x18a))]($gameMap['getSolidReflectionBlur']()),this['_solidReflectLayer'][_0x420edc(0x1f8)][_0x420edc(0x26c)](this[_0x420edc(0x148)][_0x420edc(0x1c8)])),this[_0x420edc(0x24d)]();},Spriteset_Map[_0x48d215(0x23b)]['createSolidReflectionMask']=function(){const _0x3f378d=_0x48d215,_0x41a27b=$gameMap[_0x3f378d(0x1f1)](),_0x2b8bd7=$gameMap[_0x3f378d(0x24f)](),_0x65881f=this[_0x3f378d(0x234)](_0x41a27b,_0x2b8bd7);_0x65881f&&(this[_0x3f378d(0x14b)](_0x65881f),this[_0x3f378d(0x148)][_0x3f378d(0x24e)]=_0x65881f);},Spriteset_Map[_0x48d215(0x23b)][_0x48d215(0x234)]=function(_0x370fa6,_0x3ebbd2){const _0x4744f8=_0x48d215;if(_0x370fa6[_0x4744f8(0x21b)]<=0x0&&_0x3ebbd2[_0x4744f8(0x21b)]<=0x0)return null;const _0x4b8b8d=$gameMap[_0x4744f8(0x139)](),_0x516335=$gameMap['height'](),_0x488501=$gameMap['tileWidth'](),_0x41cdde=$gameMap[_0x4744f8(0x118)](),_0x186af2=0x0,_0x1cc635=_0x186af2*0x2,_0x29524d=new Sprite();_0x29524d[_0x4744f8(0x141)]=new Bitmap(_0x4b8b8d*_0x488501,_0x516335*_0x41cdde);for(let _0x40d173=0x0;_0x40d173<_0x4b8b8d;_0x40d173++){if('cDFHZ'!==_0x4744f8(0x1a7))for(let _0x3c41f1=0x0;_0x3c41f1<_0x516335;_0x3c41f1++){const _0x17fe28=$gameMap[_0x4744f8(0x13e)](_0x40d173,_0x3c41f1);(_0x370fa6['includes'](_0x17fe28)||_0x3ebbd2[_0x4744f8(0x176)]($gameMap[_0x4744f8(0x13a)](_0x40d173,_0x3c41f1)))&&(_0x29524d['bitmap'][_0x4744f8(0x187)](_0x40d173*_0x488501+_0x186af2,_0x3c41f1*_0x41cdde+_0x186af2,_0x488501-_0x1cc635,_0x41cdde-_0x1cc635,_0x4744f8(0x122)),Imported[_0x4744f8(0x213)]&&SceneManager[_0x4744f8(0x145)][_0x4744f8(0x195)]['push'](_0x17fe28));}else _0x36fcc7[_0x4744f8(0x136)]=_0x15e5c0;}return _0x29524d;},VisuMZ[_0x48d215(0x260)]['Spriteset_Map_createCharacters']=Spriteset_Map[_0x48d215(0x23b)][_0x48d215(0x18d)],Spriteset_Map[_0x48d215(0x23b)]['createCharacters']=function(){const _0x2caf5c=_0x48d215;VisuMZ[_0x2caf5c(0x260)][_0x2caf5c(0x117)]['call'](this),this[_0x2caf5c(0x246)]();},Spriteset_Map[_0x48d215(0x23b)]['createCharacterReflections']=function(){const _0x64cdc3=_0x48d215;if($gameMap[_0x64cdc3(0x1bd)]())return;const _0x44528b=[],_0x597a80=[];for(const _0x2142d4 of $gameMap[_0x64cdc3(0x223)]()){if(_0x64cdc3(0x199)===_0x64cdc3(0x142))return 0x0;else{if(_0x2142d4['_noReflection'])continue;_0x44528b[_0x64cdc3(0x26c)](new Sprite_ReflectionCharacter(_0x2142d4)),_0x597a80[_0x64cdc3(0x26c)](new Sprite_ReflectionCharacter(_0x2142d4));}}for(const _0x5ae6df of $gameMap[_0x64cdc3(0x161)]()){_0x64cdc3(0x16d)==='QPNVE'?(_0x44528b[_0x64cdc3(0x26c)](new Sprite_ReflectionCharacter(_0x5ae6df)),_0x597a80[_0x64cdc3(0x26c)](new Sprite_ReflectionCharacter(_0x5ae6df))):(_0x3a1bf7[_0x64cdc3(0x266)]=!![],this[_0x64cdc3(0x154)][_0x64cdc3(0x14b)](_0x29c3e7),_0x3baf27['scale']['y']=-0.85);}for(const _0xf1918a of $gamePlayer[_0x64cdc3(0x270)]()[_0x64cdc3(0x10c)]()){_0x44528b[_0x64cdc3(0x26c)](new Sprite_ReflectionCharacter(_0xf1918a)),_0x597a80[_0x64cdc3(0x26c)](new Sprite_ReflectionCharacter(_0xf1918a));}_0x44528b['push'](new Sprite_ReflectionCharacter($gamePlayer)),_0x597a80['push'](new Sprite_ReflectionCharacter($gamePlayer));if(this[_0x64cdc3(0x140)]){if(_0x64cdc3(0x15e)===_0x64cdc3(0x25b))_0x35fb91[_0x64cdc3(0x260)][_0x64cdc3(0x17e)][_0x64cdc3(0x1ec)](this),this['setupVisualParallaxesEffects']();else for(const _0x3e22bf of _0x44528b){_0x3e22bf[_0x64cdc3(0x266)]=!![],this[_0x64cdc3(0x235)]['addChild'](_0x3e22bf),_0x3e22bf[_0x64cdc3(0x1f3)]['y']=-0.85,_0x3e22bf[_0x64cdc3(0x1f8)]=_0x3e22bf['filters']||[];if(this[_0x64cdc3(0x140)][_0x64cdc3(0x202)]){if('gTCla'!==_0x64cdc3(0x25f))_0x3e22bf[_0x64cdc3(0x1f8)][_0x64cdc3(0x26c)](this[_0x64cdc3(0x140)][_0x64cdc3(0x202)]);else{this[_0x64cdc3(0x180)]=this[_0x64cdc3(0x180)]||[];if(!this[_0x64cdc3(0x180)][_0x15e310])return;this[_0x64cdc3(0x180)][_0x193336]=null;const _0x44ea97=_0x525783[_0x64cdc3(0x145)][_0x64cdc3(0x1e3)];_0x44ea97&&_0x44ea97['removeVisualParallaxLayer'](_0x4cb3c4);}}}}if(this[_0x64cdc3(0x148)])for(const _0x2b28a1 of _0x597a80){'dpnGq'===_0x64cdc3(0x110)?(_0x417d4c[_0x64cdc3(0x1dd)]=_0x1fdb2e(_0x1c69b2['$1'])[_0x64cdc3(0x12d)](),_0x2a2c65[_0x64cdc3(0x1dd)]['charAt'](0x0)==='!'&&(_0x1621ca['_parallaxZero']=!![])):(_0x2b28a1[_0x64cdc3(0x266)]=!![],this[_0x64cdc3(0x154)]['addChild'](_0x2b28a1),_0x2b28a1[_0x64cdc3(0x1f3)]['y']=-0.85);}},VisuMZ[_0x48d215(0x260)][_0x48d215(0x22a)]=Spriteset_Map['prototype']['update'],Spriteset_Map[_0x48d215(0x23b)]['update']=function(){const _0x37af45=_0x48d215;VisuMZ[_0x37af45(0x260)]['Spriteset_Map_update'][_0x37af45(0x1ec)](this),this[_0x37af45(0x144)](),this[_0x37af45(0x20a)]();},Spriteset_Map[_0x48d215(0x23b)][_0x48d215(0x144)]=function(){const _0x4e187d=_0x48d215;if(!this[_0x4e187d(0x140)])return;if($gameMap){if(!this[_0x4e187d(0x104)]&&$gameMap[_0x4e187d(0x1e9)]()){if('EcEYh'!==_0x4e187d(0x10f))this[_0x4e187d(0x140)][_0x4e187d(0x14b)](this['_waterReflectContainer']),this[_0x4e187d(0x104)]=!![];else{if(!_0xac9eaa[_0x4e187d(0x1f8)])return;if(_0x3abbde['isLoopHorizontal']()||_0x564634[_0x4e187d(0x227)]())return;if(_0x4fcdf9[_0x4e187d(0x1bd)]())return;this[_0x4e187d(0x148)]=new _0x3834e0(),this['_solidReflectContainer']=new _0x262519(),this[_0x4e187d(0x230)]=![],this[_0x4e187d(0x150)]['addChild'](this[_0x4e187d(0x148)]),this[_0x4e187d(0x148)][_0x4e187d(0x1f8)]=[],this[_0x4e187d(0x148)][_0x4e187d(0x1a0)]=_0x53927a[_0x4e187d(0x1d4)](),!!_0x82eddd[_0x4e187d(0x1f8)][_0x4e187d(0x18a)]&&(this['_solidReflectLayer']['_blurFilter']=new _0x2d4ea5[(_0x4e187d(0x1f8))][(_0x4e187d(0x18a))](_0x44f577[_0x4e187d(0x153)]()),this[_0x4e187d(0x148)][_0x4e187d(0x1f8)][_0x4e187d(0x26c)](this[_0x4e187d(0x148)][_0x4e187d(0x1c8)])),this[_0x4e187d(0x24d)]();}}else this[_0x4e187d(0x104)]&&!$gameMap[_0x4e187d(0x1e9)]()&&(this[_0x4e187d(0x140)][_0x4e187d(0x1a1)](this[_0x4e187d(0x235)]),this['_waterReflectAdded']=![]);}if(this[_0x4e187d(0x140)][_0x4e187d(0x202)]){if('MjkUh'===_0x4e187d(0x157))return!![];else this[_0x4e187d(0x140)][_0x4e187d(0x202)][_0x4e187d(0x149)]+=0.05;}const _0x13d914=this[_0x4e187d(0x140)][_0x4e187d(0x20e)];_0x13d914&&(_0x13d914['x']=Math[_0x4e187d(0x158)](-$gameMap[_0x4e187d(0x16c)]()*$gameMap[_0x4e187d(0x265)]()),_0x13d914['y']=Math[_0x4e187d(0x158)](-$gameMap[_0x4e187d(0x1d0)]()*$gameMap[_0x4e187d(0x118)]()));},Spriteset_Map[_0x48d215(0x23b)][_0x48d215(0x20a)]=function(){const _0x587ec9=_0x48d215;if(!this['_solidReflectLayer'])return;if($gameMap){if(!this[_0x587ec9(0x230)]&&$gameMap[_0x587ec9(0xfe)]())_0x587ec9(0x1bb)!=='ZqttG'?_0x502552[_0x587ec9(0x225)]+=_0x3b3c73:(this[_0x587ec9(0x148)][_0x587ec9(0x14b)](this[_0x587ec9(0x154)]),this[_0x587ec9(0x230)]=!![]);else{if(this[_0x587ec9(0x230)]&&!$gameMap['hasSolidReflections']()){if(_0x587ec9(0x232)===_0x587ec9(0x233)){const _0x2d0320=_0x4f2e5f[_0x587ec9(0x252)];_0x33dd0e[_0x587ec9(0x1a0)]=(_0x156ef0['opacity']*(_0x2d0320-0x1)+_0x232aca['targetOpacity'])/_0x2d0320,_0x5bad4d[_0x587ec9(0x252)]--;}else this['_solidReflectLayer'][_0x587ec9(0x1a1)](this[_0x587ec9(0x154)]),this[_0x587ec9(0x230)]=![];}}}const _0x333f56=this[_0x587ec9(0x148)][_0x587ec9(0x20e)];_0x333f56&&(_0x333f56['x']=Math[_0x587ec9(0x158)](-$gameMap[_0x587ec9(0x16c)]()*$gameMap[_0x587ec9(0x265)]()),_0x333f56['y']=Math['floor'](-$gameMap[_0x587ec9(0x1d0)]()*$gameMap[_0x587ec9(0x118)]()));},Spriteset_Map['prototype'][_0x48d215(0x198)]=function(){const _0x3ea95b=_0x48d215;this[_0x3ea95b(0x267)]=new Sprite(),this[_0x3ea95b(0x150)][_0x3ea95b(0x14b)](this['_parallaxContainer']),this[_0x3ea95b(0x217)]=[null];},Spriteset_Map[_0x48d215(0x23b)][_0x48d215(0x102)]=function(){const _0x3ffdb8=_0x48d215,_0xb24a79=$gameMap[_0x3ffdb8(0xff)]();for(const _0x290a1 of _0xb24a79){if(!_0x290a1)continue;this['createNewParallaxLayer'](_0x290a1);}},Spriteset_Map[_0x48d215(0x23b)][_0x48d215(0x1e8)]=function(_0x29d178){const _0x2a4f38=_0x48d215;if(!_0x29d178)return;const _0x558e2a=new Sprite_VisualParallax(_0x29d178['id']);_0x558e2a[_0x2a4f38(0x25a)](0x0,0x0,Graphics[_0x2a4f38(0x139)],Graphics[_0x2a4f38(0x1dc)]),this['_parallaxContainer'][_0x2a4f38(0x14b)](_0x558e2a);},Spriteset_Map[_0x48d215(0x23b)][_0x48d215(0x125)]=function(){const _0x10824a=_0x48d215;this['_parallaxContainer'][_0x10824a(0x112)][_0x10824a(0x25c)]((_0x4db5eb,_0x2f2389)=>_0x4db5eb['_id']-_0x2f2389[_0x10824a(0x1a2)]);},Spriteset_Map[_0x48d215(0x23b)][_0x48d215(0x15f)]=function(_0xf143a2){const _0x56b805=_0x48d215;return this[_0x56b805(0x267)][_0x56b805(0x112)][_0x56b805(0x211)](_0x41d54c=>_0x41d54c['_id']===_0xf143a2);},Spriteset_Map[_0x48d215(0x23b)][_0x48d215(0x1ee)]=function(_0x43c520){const _0x3754ea=_0x48d215,_0x1a1895=this[_0x3754ea(0x15f)](_0x43c520);if(_0x1a1895){if(_0x3754ea(0x14a)!==_0x3754ea(0x14a)){const _0x5997c5=_0x478ce2(_0x2d527f['$1'])[_0x3754ea(0x1ad)](',')[_0x3754ea(0x13b)](_0xf5743d=>_0x3c7793(_0xf5743d)||0x0);while(_0x5997c5[_0x3754ea(0x21b)]<0x4)_0x5997c5[_0x3754ea(0x26c)](0x0);_0x1d2f73[_0x3754ea(0x1eb)]=_0x5997c5;}else this['_parallaxContainer']['removeChild'](_0x1a1895);}},Spriteset_Map[_0x48d215(0x23b)]['updateVisualParallaxLayer']=function(_0x316765,_0x3654f3){const _0x2cf620=_0x48d215,_0x42c6bf=this[_0x2cf620(0x15f)](_0x316765);!_0x42c6bf?'ADNLF'==='ADNLF'?(this[_0x2cf620(0x1e8)]($gameMap[_0x2cf620(0x1a5)](_0x316765)),this[_0x2cf620(0x125)]()):(this['origin']['x']=_0x4d6cf2[_0x2cf620(0x105)](this[_0x2cf620(0x1a2)]),this[_0x2cf620(0x1a8)]['y']=_0x3df03f[_0x2cf620(0x108)](this[_0x2cf620(0x1a2)])):(_0x42c6bf['loadBitmap'](),_0x3654f3&&_0x42c6bf[_0x2cf620(0x141)][_0x2cf620(0x1a9)](_0x42c6bf[_0x2cf620(0x17d)]['bind'](_0x42c6bf)));};