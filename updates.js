Braille_Converter = "<span class='braille_converter_updates' style='color:darkblue'>Braille Converter</span>: "
Calendar_Converter = "<span class='calendar_converter_updates' style='color:blue'>Calendar Converter</span>: "
Holidays = "<span class='holidays_updates' style='color:green'>Holidays</span>: "
Unit_Converter = "<span class='noun_decliner_updates' style='color:turquoise'>Noun Decliner</span>: "
Noun_Decliner = "<span class='unit_converter_updates' style='color:purple'>Unit Converter</span>: "
Updates = "<span class='updates_updates' style='color:orange'>Updates</span>: "

dt = (a) => `<h3>${a.split("/")[0]} ${["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][+a.split("/")[1]-1]} 202${a.split("/")[2]}</h3>`
log = `<pre>
${dt("12/1/6")}
>Braille: Added Khoekhoe Braille

${dt("4/1/6")}
>Casino: Added Double Up Blackjack

${dt("31/12/5")}
>Casino: Added four new bets in Craps

${dt("30/12/5")}
>Casino: Changed Roulette to single zero

${dt("27/12/5")}
>Casino: Added Californian Blackjack

${dt("23/12/5")}
>Casino: Added Californian Three Card

${dt("19/12/5")}
>Casino: Added Bonus Deuces Wild and Loaded Wilds Stud Poker

${dt("17/12/5")}
>Casino: Added Deuces Wild, Joker Poker, and Xtreme Hold'Em

${dt("12/12/5")}
>Casino: Added Louisiana Stud as a separate game from Cajun Stud
>Casino: Changed site to dark mode

${dt("11/12/5")}
>Casino: Added 3 Card and Four Card Frenzy
>Casino: Renamed 3 Dice Baccarat to 3 Dice Duel

${dt("7/12/5")}
>Braille: Added Crimean Tatar Braille (Latin)

${dt("30/11/5")}
>Casino: Added the Lucky Ladies side bet

${dt("29/11/5")}
>Casino: Added the 21+3 Side Bet

${dt("28/11/5")}
>Casino: Added Four Card Prime and Player's Edge 21

${dt("27/11/5")}
>Casino: Added Pai Gow Tiles, albeit only the Fire and Ice side bet

${dt("26/11/5")}
>Casino: Added European Blackjack and Panamanian Blackjack

${dt("24/11/5")}
>Casino: Completely re-designed the website to make it much more aesthetic - the background is no longer green
>Casino: Added pay tables to every game
>Casino: Added Ace and Deuce Bonus video poker

${dt("21/11/5")}
>Casino: Added the Straight Flush side bet to High Card Flush

${dt("20/11/5")}
>Casino: Changed the layout a lot, you now get strategy warnings and can adjust the game's rules in the newly developed Rules section
>Casino: Added Super Double Double Bonus in Video Poker

${dt("16/11/5")}
>Casino: Added Down Under Blackjack and 5 Card Pai Gow

${dt("15/11/5")}
>Casino: Added Sic Bo, added the ability to bet individual numbers on the Roulette table, and improved the design of the Boule table
>Casino: Added Video Poker variants: Double Double Aces and Faces, Double Double Bonus, Double Double Bonus Plus, and Triple Double Bonus

${dt("14/11/5")}
>Casino: Improved the design and added Dutch Baccarat

${dt("13/11/5")}
>Casino: Added playable demos for Crapless Craps, Craps, and Roulette, they are not finished though

${dt("11/11/5")}
>Casino: Added Big Six, Boule, and five more Video Poker games

${dt("10/11/5")}
>Casino: Added eight Video Poker games

${dt("9/11/5")}
>Casino: Added Spanish 21

${dt("8/11/5")}
>Casino: Added Chuck-A-Luck and Super Fun 21
>Poker: Changed name to Casino, former Casino page was archived

${dt("7/11/5")}
>Website: Added a favicon (finally)

${dt("30/10/5")}
>Poker: Added Party Pairs and Three Card Prime

${dt("22/10/5")}
>Poker: Added Barbut

${dt("21/10/5")}
>Poker: Added 3 Dice Baccarat

${dt("20/10/5")}
>Poker: Added Double 4 More Blackjack
>Poker: Took down ten games for "legal reasons" :/

${dt("19/10/5")}
>Poker: Completely redesigned the chip system for players and dealers

${dt("17/10/5")}
>Poker: Added side bets for Criss Cross Poker, Heads Up Hold'Em, and Ultimate Texas Hold'Em Bonus

${dt("14/10/5")}
>Poker: Added Criss Cross Poker
>Poker: Added various pay tables with Double Hook Poker

${dt("6/10/5")}
>Poker: Added some Razz side bets to Casino Hold'Em

${dt("5/10/5")}
>Poker: Added a different payout table for Three Card Poker's Six Card Bonus side bet

${dt("28/9/5")}
>Poker: Added Double Hook Poker

${dt("28/9/5")}
>Poker: Added Knockout 52

${dt("4/9/5")}
>Poker: Added LOTREC 2

${dt("27/8/5")}
>Poker: Added Cee-lo

${dt("26/8/5")}
>Braille Converter: Added a proposal for a reformed Hawaiian Braille

${dt("21/8/5")}
>Poker: Added demos for two games "Pick a Suit" and "Auspicious Baccarat", removed "Big Six" (for now)

${dt("17/8/5")}
>Poker: Added the Flush Bonus side bet to High Card Flush

${dt("17/8/5")}
>Poker: Added 3 Shot Poker and Flop Poker, then I fixed some issues in Blackjack

${dt("13/8/5")}
>Poker: Added Big Bet Blackjack and added the Lucky 11s side bet to Blackjack

${dt("13/8/5")}
>Poker: Added Blackjack

${dt("12/8/5")}
>Braille Converter: Added Nauruan Braille
>Poker: Added Banca Francesa

${dt("10/8/5")}
>Poker: Removed the previews, added Let It Ride

${dt("10/8/5")}
>Poker: Added a Big Six and High Card Flush and I added a Roulette preview

${dt("9/8/5")}
>Poker: Added a Craps preview

${dt("7/8/5")}
>Poker: Added Casino War

${dt("6/8/5")}
>Poker: Added Casino Hold'Em,
>Strategy: New page, connected to the Poker page, now shows the strategy for different table games

${dt("5/8/5")}
>Braille Converter: Added Guarani and updated Urdu Braille

${dt("3/8/5")}
>Poker: Added Caribbean Stud Poker

${dt("2/8/5")}
>Poker: Added Heads Up Hold'Em and Texas Hold'Em Bonus

${dt("1/8/5")}
>Braille Converter: Added Uzbek
>Poker: Added Jackpot Hold'Em and Ultimate Texas Hold'Em
>Poker: Methodically dealing the cards is now included in the Baccarat Dealer simulations

${dt("30/7/5")}
>Poker: Added Mississippi Stud

${dt("30/7/5")}
>Poker: Added Dealer Mode, where you can practice being a dealer

${dt("28/7/5")}
>Poker: Added Crazy 4 Poker

${dt("27/7/5")}
>Poker: Renamed Brooklyn Four Card to Miami Four Card, made design changes on the page

${dt("23/7/5")}
>Poker: Added my own game, Brooklyn Four Card

${dt("23/7/5")}
>Poker: Improved the design of the site; added BBQ Baccarat and Dakota Duel Draw

${dt("22/7/5")}
>Casino Dealer: Added Double 4 More Blackjack and Down Under Blackjack
>Poker: Added a new site which is just a much better looking and performing version of the Casino page. There is only Three Card Poker so far.

${dt("22/7/5")}
>Casino Dealer: Added some side bets to BBQ Baccarat

${dt("21/7/5")}
>Casino: Added two sidebets to Blackjack; Lucky 11's and Suited Lucky 11's
>Casino Dealer: Added the same side bets to Blackjack
>Casino Dealer: Added three new games: BBQ Baccarat, Dakota Duel Draw, and Five Card Pai Gow

${dt("20/7/5")}
>Homepage: Minor edits to improve the home page.

${dt("15/7/5")}
>Homepage: Redid the home page a second time, removing all the images and reformatting things. This is mostly to make it look more consistent across devices.
>Video Poker: Added a dozen more types of video poker, mostly complex variants with wild cards

${dt("14/7/5")}
>Video Poker: Added a new section where you can play over a dozen types of video poker

${dt("7/7/5")}
>Casino Dealer: Fixed some issues with wild flushes in the games with jokers

${dt("6/7/5")}
>Casino Dealer: Added Baccarat and some variants (Nepal and EZ)

${dt("5/7/5")}
>Casino Dealer: Added more craps bets and added the game Crapless Craps

${dt("3/7/5")}
>Casino Dealer: Added Sic Bo
>Keyboards: Added Louisiana Creole

${dt("29/6/5")}
>Casino Dealer: Fixed a glitch regarding wild full houses

${dt("28/6/5")}
>Casino Dealer: Added Craps and Texas Hold'Em Bonus Poker, though I only have a few types of single-roll bets for craps

${dt("27/6/5")}
>Casino Dealer: Added four games: Caribbean Stud Poker, DJ Wild, Heads Up Hold'Em, and Jackpot Hold'Em; removed Zombie Blackjack as I don't think it is played anywhere

${dt("26/6/5")}
>Casino Dealer: Continued to change the layout and added new options for side bet values

${dt("23/6/5")}
>Casino Dealer: Changed the page's layout a bit, added instructions for the user, and added a side bet for Let It Ride

${dt("21/6/5")}
>Casino Dealer: Added Crazy 4 Poker and Four Card Poker

${dt("19/6/5")}
>Casino Dealer: Added many sides bets and fixed some small glitches

${dt("16/6/5")}
>Braille Converter: Added Œ to Alsatian braille

${dt("30/5/5")}
>Casino: Added Zombie Blackjack
>Casino Dealer: Added Zombie Blackjack
>Keyboards: Moved keyboards URL from LETTERLY.GITHUB.IO to HARRISMOWBRAY.COM

${dt("25/5/5")}
>Casino: Now you can play Zappit too

${dt("25/5/5")}
>Casino Dealer: Added Zappit, a blackjack variant

${dt("20/5/5")}
>Casino Dealer: Added Ultimate Texas Hold'Em after reworking the algorithm that analyzes poker hands

${dt("19/5/5")}
>Braille Converter: Moved Alsatian Braille to the French number system

${dt("17/5/5")}
>Casino Dealer: Added the game Let It Ride

${dt("16/5/5")}
>Calendar Converter: Partially fixed the Nanakshahi calendar... at least the current date is correct for now pending updates

${dt("15/5/5")}
>Braille Converter: Added a Braille proposal for Louisiana Creole

${dt("3/5/5")}
>Casino Dealer: Made Ante Bonus optional in three card poker

${dt("24/4/5")}
>Braille Converter: Added West Frisian and Alsatian proposals to the Braille converter

${dt("21/4/5")}
>Casino: Fixed a glitch with Casino War 
>Casino Dealer: Added Double Draw Poker

${dt("17/4/5")}
>Casino Dealer: Fixed an issue with payouts in Casino War
>Casino Dealer: Added Free Bet Blackjack and Mississippi Stud

${dt("12/4/5")}
>Homepage: The homepage is now redesigned to have some text and images about me, accompanied by links to other parts of the site
>Projects: The previous Menu has been moved to a new page called projects

${dt("12/4/5")}
>Casino Dealer: Added Blackjack Switch

${dt("12/4/5")}
>Casino Dealer: Added Blackjack and now you can change settings from different games

${dt("11/4/5")}
>Casino Dealer: Added a new section where you can practice being a casino dealer for Casino War and Three Card Poker

${dt("8/4/5")}
>Casino: Added early surrender in Blackjack

${dt("8/4/5")}
>Casino: The dealer now gives helpful advice in Three Card Poker and Blackjack

${dt("7/4/5")}
>Casino: Fixed some critical issues in Baccarat and added the Dragon 7 bet

${dt("5/4/5")}
>Casino: Added Blackjack Switch

${dt("3/4/5")}
>Casino: Fixed some issues with the ENHC rule in Blackjack

${dt("1/4/5")}
>Casino: The decks actually shuffle correctly now

${dt("31/3/5")}
>Casino: Blackjack settings now include Reno rules regarding doubling (only doubling on hard 9, 10, and 11)

${dt("30/3/5")}
>Casino: Fixed Three Card Poker rules regarding non-qualifying hands
>Casino: Changed the dealer's conversations from politics to fun facts

${dt("30/3/5")}
>Casino: Finished basic Blackjack, destroyed many glitches, and added different settings
>Casino: Added a 500₪ purple chip and increased starting money from 5000₪ to 25000₪ (₪ is now the default currency symbol)
>Casino: Added an optional 10:1 mini royale ante bonus on Three Card Poker
>Casino: Added Free Bet Blackjack

${dt("29/3/5")}
>Casino: Added Blackjack, though it is not complete yet

${dt("28/3/5")}
>Casino: Changed the appearance a lot, background is now green like the felt on a casino table
>Casino: You can talk to the dealer and the user experience is much better
>Casino: Fixed a glitch where you would lose in baccarat during a tie
>Casino: I removed roulette, boule, craps, and big six (money wheel) - they were much lower quality games to play on my website but I will bring them back (not any time soon though)

${dt("27/3/5")}
>Casino: Changed the appearance a little
>Contact: Removed Viber as a method of contact

${dt("24/3/5")}
>Casino: Added color to playing cards and fixed some issues with three-card-poker and casino war

${dt("24/3/5")}
>Braille Converter: Fixed some random punctuation errors across a few languages

${dt("23/3/5")}
>Casino: Fixed some glitches with three-card poker and baccarat
>Casino: Added a French roulette-like casino game called Boule

${dt("23/3/5")}
>Casino: Added the "2" bet option for Big Six
>Casino: Fixed an issue with three-card poker

${dt("22/3/5")}
>Casino: Finally added three-card poker, the most complex game yet
>Casino: Fixed some glitches and improved the appearance a little

${dt("21/3/5")}
>Casino: You must now bet to play the games

${dt("12/3/5")}
>Adjective/Noun/Verb Inflector: Added a few irregular English nouns
>Casino: You can now choose between 'en prison' and 'la partage' after a spin in Roulette
>Casino: Finally added the correct tie mechanism in Casino War and added the option for double tie bonuses

${dt("3/3/5")}
>Casino: Renamed Money Wheel to Big Six
>Casino: Increased starting money from 250¢ to 5000¢
>Casino: Added 'en prison' as an optional rule in Roulette
>Casino: Moved baccarat from one deck to six decks

${dt("1/3/5")}
>Casino: Added the Money Wheel game and improved betting a bit across the four games; increased starting money from 100¢ to 250¢

${dt("26/2/5")}
>Casino: Fixed an issue with the "19 to 36" bet in roulette
>Wikipedia: Updated the link to Syloti Wikipedia

${dt("20/2/5")}
>Number Generator: Added Breton ordinal numbers

${dt("18/2/5")}
>Menu: Fixed an issue regarding menu display
>Number Generator: Added Turkish ordinal numbers
>Papiamento Converter/Spellcheck: Added Aruban spellcheck

${dt("17/2/5")}
>Number Generator: Added Turkish cardinal numbers
>Number Generator: Fixed a small issue with Turkmen numbers

${"14/2/5"}
>Number Generator: Added Breton cardinal numbers

${dt("13/2/5")}
${Braille_Converter}Switched Breton Braille to using Antoine numbers

${dt("11/2/5")}
>Casino: Improved the design a little and finished adding all types of Roulette bets

${dt("4/2/5")}
>Prayer Directions: Improved the appearance
>Prayer Times: Improved the appearance
>Press: Improved the appearance
>Sunrise/Sunset Times: Improved the appearance

${dt("3/2/5")}
>Casino: Added the EZ Baccarat variant

${dt("2/2/5")}
>Casino: Added top line and trio/basket bids in roulette
>Casino: You can now make your own bids (between 1¤ to 10¤) and do multiple bids on the same round in all games

${dt("1/2/5")}
>Casino: Added the "Super 6" variety of baccarat
>Casino: Added quadruple zero roulette and also added sextuple bet types

${dt("31/1/5")}
>Casino: Fixed an issue affecting the payouts for 8:1 tie payouts in baccarat
>Casino: Added options for triple bets in roulette

${dt("30/1/5")}
>Casino: Added a new section where you can play Baccarat, Craps, and Roulette with various regional rules
>Menu: Replaced many HARRISMOWBRAY.PAGES.DEV links with HARRISMOWBRAY.COM links
>Menu: Named the "Mathematics/Programming" section to "Mathetmatics, Statistics, and Programming"

${dt("29/1/5")}
>Calendar Converter: Removed the Juche calendar as its use has ended in North Korea (being replaced by the Gregorian calendar)

${dt("28/1/5")}
>Braille Converter: Edited a letter in Uyghur Braille and added two punctuation marks

${dt("26/1/5")}
>Holidays: Added a large number of Chabad-Lubavitcher holidays
>Temperature Converter: Fixed an issue with inputting negative numbers

${dt("25/1/5")}
>Adjective/Noun/Verb Inflector: Fixed an issue regarding Spanish adjectives ending in 's'
>Braille Converter: Added the Uyghur Language
>Wikipedia: Changed my Macedonian name from Харрис to Харис as someone changed the name of the Macedonian Wikipedia article

${dt("12/1/5")}
>Holidays: Fixed an issue regarding the display of the JW holiday called Lord's Evening Meal
>Holidays: Specified that only Ashkenazi Jews observe the Fast of the Firstborn if its date is displaced by Shabbat

<p id="2025">
${dt("8/1/5")}
>Holidays: Added the only observance of the Jehova's Witnesses: Lord's Evening Meal

${dt("25/12/4")}
>Braille Converter: Added the Upper Sorbian and Lower Sorbian languages

${dt("11/12/4")}
>Sign Language Alphabets: Added Nigerian Sign Language and Singapore Sign Language

${dt("6/12/4")}
>Number Generator: Fixed an issue with the Osage number 10

${dt("5/12/4")}
>Sign Language Alphabets: Added Macedonian Sign Language and Mexican Sign Language
>Sign Language Alphabets: Entering letters/symbols not used in a given language won't produce an error anymore

${dt("4/12/4")}
>Number Generator: Added Hmong numbers, in the Latin RPA alphabet
>Sign Language Alphabets: Fixed an issue with displaying Georgian Sign Language
>Sign Language Alphabets: Added a short section with information about sign language alphabets

${dt("3/12/4")}
>Papiamento Converter/Spellcheck: Added many new orthography-based rules to the converter

${dt("2/12/4")}
>Braille Converter: Added ¿ and ¡ for Spanish and Andalucian Braille

${dt("25/11/4")}
>Website: Website back at HARRISMOWBRAY.COM :)

${dt("21/11/4")}
>Holidays: Added Bangladesh's Armed Forces Day and Hong Kong's Establishment Day
>Morse Code Converter: Added Turkish Morse Code

${dt("20/11/4")}
>Adjective/Noun/Verb Inflector: Added Ido and Interlingua adjectives, nouns, and verbs
>Morse Code Converter: Added Armenian Morse Code
>Number Generator: Added Ido and Interlingua numbers
>Résumé: Moved résumé link to HARRISMOWBRAY.PAGES.DEV

${dt("19/11/4")}
>Morse Code Converter: Added Arabic and Persian Morse codes, Persian seems to have unique punctuation but I couldn't find documentation on Arabic Morse punctuation
>Number Generator: Fixed an issue with Russian numbers
>Number Generator: Fixed an issue with showing ordinal versus cardinal numbers
>Number Generator: Added ordinal numbers for the Georgian language up to 100
>Numeral Converter: Updated some Wikipedia links
>Numeral Converter: Added Sharada and Takri numerals

${dt("18/11/4")}
>Braille Converter: Added Hmong (NPH) Braille
>Number Generator: Added cardinal numbers for French and Georgian
>Numeral Converter: Added Pahawh Hmong numerals
>Website: Replaced HARRISMOWBRAY.COM internal links with HARRISMOWBRAY.PAGES.DEV links

${dt("17/11/4")}
>Code: Deleted Code section; I will not let people see my code after the domain hijacking incident as a precaution

${dt("14/11/4")}
>Website: Today I temporarily took down the website and it was hijacked in a domain attack to promote an Indonesian casino
>Website: Now temporarily hosted at HARRISMOWBRAY.GITHUB.IO and HARRISMOWBRAY.PAGES.DEV

${dt("13/11/4")}
>Braille Converter: Added a draft for Andalusian Braille and added the Québécois version of French Braille
>Papiamento Converter/Spellcheck: The Papiamento Converter and Papiamento Spellcheck were improved and combined into one page

${dt("10/11/4")}
>Sign Language Alphabets: Added BISINDO, the Indonesian Sign Language

${dt("8/11/4")}
>Sign Language Alphabets: Changed Azerbaijani Sign Language's abbreviation to the native "AİD" and fixed an issue regarding dotted/dotless I's; Georgian Sign Language was also changed from GSL to GESL
>Sign Language Alphabets: Added Filipino, Ghanaian, and Malaysian Sign Language

${dt("7/11/4")}
>Sign Language Alphabets: Added the Armenian, Australian, Azerbaijani, British, Maritime, New Zealand, Quebec, and South African Sign Languages

${dt("5/11/4")}
>Adjective/Noun/Verb Inflector: Added Spanish gerund and participle forms of verbs
>Sign Language Alphabets: Added Brazilian Sign Language and improved the design/functionality

${dt("4/11/4")}
>Color Converter: Added CMYK color formats
>Contact: Reorganized the contact section
>Date/Time: Updated some time zones to reflect daylight savings
>Sign Language Alphabets: New section which takes names and words and displays their equivalent, written out in either ASL or GSL
>Unit Converter: Added abbreviations for various units of pressure

${dt("26/10/4")}
>Color Converter: The color converter is back! While there is only RGB and Hexcode formats for now, this section now catches typos and shows the math behind the color conversions
>Election Psephology: Temporarily (or maybe permanently) removed this section from the website
>Holidays: Fixed the dates for Sukkot's isru chag
>Unit Converter: Added an alternative abbreviation for microgram, mcg

${dt("22/10/4")}
>FAQ: Changed Bio section to FAQ
${Holidays}: Clarified different times/locations of Sukkot's Isru Chag and Simchat Torah
${Holidays}: Fixed link to the Wikipedia article on the Bahá'í Faith
>Menu: Added a brief biographic text about me on the top of the page
>Prayer Directions: Cities for prayer directions are now added more automatically
>Shoe Size Converter: You can now convert from Argentine and Brazilian shoe sizes

${dt("20/10/4")}
>Bio: Added frequently asked questions (and their answers)
>Braille Converter: Added placeholders to all fields
>Braille Converter: Added Hawaiian Braille

${dt("17/10/4")}
>Braille Converter: Fixed an issue with the display of Avar letters

${dt("10/10/4")}
>Date/Time: Added the two Californian cities of San Francisco and Los Angeles
>Papiamento Spellcheck: New section which acts as spellcheck for the Papiamento language (Curaçao/Bonaire orthography)

${dt("7/10/4")}
>Adjective/Noun/Verb Inflector: Added Swedish adjectives and verbs
>Shoe Size Converter: Added the shoe size systems of Argentina, Brazil, and EU
>Shoe Size Converter: Fully integrated the Mondopoint and centimeters into the calculator, Japan size (which is just centimeters) is indicated

${dt("7/10/4")}
>Adjective/Noun/Verb Inflector: Added Swedish nouns
>Adjective/Noun/Verb Inflector: Fixed an issue with the display of Spanish verbs

${dt("5/10/4")}
>Adjective/Noun/Verb Inflector: Added even more irregular verbs in English and established many patterns for irregular verbs

${dt("4/10/4")}
>Adjective/Noun/Verb Inflector: Fixed the past/participle form of verbs ending with C in English, and added many irregular verbs

${dt("3/10/4")}
>Updates: Fixed another issue with the display of dates of updates

${dt("2/10/4")}
>Adjective/Noun/Verb Inflector: Kept adding increasingly rare irregular verbs in English
>Holidays: Got a better external link for the Jewish holiday of Seharane
>Shoe Size Converter: Now there are men's and women's shoe size measurements from the Australia, the UK, and the US, as well as centimeter and Mondopoint measurements

${dt("1/10/4")}
>Adjective/Noun/Verb Inflector: Added many more irregular verbs in English, many of which are pretty rare
>Shoe Size Converter: Added a new section where you can convert between shoe sizes (starting with inches, UK Men's, and US Men's)
>Unit Converter: Added the alternative name for the length unit thou: "mil"
>Updates: Fixed an issue with the display of dates of updates
>Website: Added a blue gradient background, replacing the plain white background
>Website: Red is now the default background color when you select text with your mouse

${dt("26/9/4")}
>Adjective/Noun/Verb Inflector: Adjective/Noun Inflector and Verb Conjugator were combined into a single section

${dt("25/9/4")}
>Adjective/Noun Inflector: Adjective Inflector and Noun Decliner were combined into a single section
>Alphabet Converter: This section has been renamed from Orthography Converter
>Date/Time: Fixed the display of the date for the city of Hebron
>Papiamento Converter: Added a new section which converts Papiamento between the Aruba and Curaçao/Bonaire orthographies
>Verb Conjugator: Added Spanish verbs, just the conditional, imperfect, and future tenses so far

${dt("24/9/4")}
>Date/Time: Date Formatter and Time Now sections have been merged into a new Date/Time section
>Date/Time: Added the cities of Montreal and Paris
>Date/Time: Now different hour/minute separators are displayed while giving the time depending on location
>Holidays: Added some holidays for Botswana, Ghana, and the United States
>Morse Converter: Added my Osage Morse proposal
>Noun Decliner: Added many more irregular nouns for English including a new rule for nouns ending in -ful
>Number Generator: Added Osage numbers
>Unit Converter: Fixed an issue with updating values while adjusting units of measurement
>Verb Conjugator: Added English verbs

${dt("23/9/4")}
>Adjective Inflector: Changed the appearance of most languages' outputs
>Noun Decliner: Changed the appearance of English's output

${dt("22/9/4")}
>Number Generator: Fixed the Belarusian number for '40'
>Unit Converter: Added default values for the Unit Converter
>Unit Converter: Added abbreviations for solid and plane angles and 'gradian' is now 'gradian/gon'
>Wikipedia: Improved the aesthetics of the Wikipedia section

${dt("12/9/4")}
>Morse Converter: Changed the value of Ც in my Georgian Morse proposal
>Morse Converter: Added my Macedonian Morse proposal

${dt("12/9/4")}
>Morse Converter: Added the Serbian language as well as my proposal for Faroese

${dt("12/9/4")}
>Morse Converter: Fixed some issues with right-to-left languages and changed appearance a bit
>Morse Converter: Added Esperanto, Hebrew, Polish, and Spanish Morse code
>Morse Converter: Fixed Russian representation of Ъ
>Number Generator: Added Russian cardinal numbers

${dt("12/9/4")}
>Adjective Inflector: Significantly improved rules governing irregular superlatives in Spanish
>Number Generator: Added Ukrainian cardinal numbers
>Orthography Converter: Added bidirectional Laz orthography conversion

<h3>11 September 2024</h3>
>Morse Converter: Added five unofficial Morse punctuation marks: ! ; $ _ &
>Morse Converter: Added Bulgarian, Greek, Russian, and Ukrainian Morse code
>Morse Converter: Generally improved the appearance and organization of the page

<h3>10 September 2024</h3>
>Morse Converter: Added a new section which converts text from different languages (just English and Georgian so far) to Morse code

<h3>5 September 2024</h3>
${Noun_Decliner}Added gender/article recognition for Sicilian and Extremaduran nouns
${Noun_Decliner}Fixed pluralization for Extremaduran nouns ending in S
${Noun_Decliner}Added Italian noun pluralization/genderization/articlization
${Noun_Decliner}All Romance languages now show nouns with indefinite articles (alongside the already existing definite article versions)

<h3>3 September 2024</h3>
${Noun_Decliner}Added a notes panel which explains nuances of noun declension; most English words will now have explanations as to why their plurals are the way they are
${Noun_Decliner}Added gender/article recognition for Extremaduran nouns
${Noun_Decliner}Programmed in many Spanish words of ambiguous gender (like el/la dracma), information in the notes section has been added for five especially special nouns
>Number Generator: Added Aragonese cardinal numbers
${Unit_Converter}Added the abbreviation "cu ft" for cubic feet

<h3>30 August 2024</h3>
${Noun_Decliner}Nouns gender is now given for Belarusian nouns
${Noun_Decliner}Fixed some issues with gender/article determination across languages
${Unit_Converter}Added abbreviations for some units of area
${Unit_Converter}Added the units of area mål and decimilliare and the units of length decameter and hectometer
>Updates: Fixed the link in the update log to its new link (HARRISMOWBRAY.COM/BRAILLE.TXT)

<h3>29 August 2024</h3>
${Noun_Decliner}Pluralization and gender/article-determining added for French nouns
${Noun_Decliner}Added the nominative plural and gender determination for Polish nouns
${Noun_Decliner}Added the correct article for nouns starting with á

<h3>28 August 2024</h3>
${Noun_Decliner}Gender is now not determined for Spanish nouns if the website isn't sure (a small percent of the time, mostly with words ending in 'e')
${Noun_Decliner}Greatly improved the gender/article determiner for Spanish nouns

<h3>26 August 2024</h3>
${Noun_Decliner}Began adding Belarusian nouns
${Noun_Decliner}For Spanish nouns, noun gender is now detected and articles are shown
>Number Generator: Cardinal and Ordinal numbers are labeled, and the "scale" is specified in case there are multiple for a single language
>Number Generator: Ordinal numbers above a billion are now permitted in Spanish and a separate glitch with ordinal numbers in the millions was fixed
>Number Generator: Added Belarusian numbers (ordinal only below 1000)

<h3>24 August 2024</h3>
>Number Generator: Fixed an issue with Esperanto ordinal number generation
>Number Generator: You can now go up to 10³⁰ in Esperanto (in all three systems)

<h3>21 August 2024</h3>
>Number Generator: Esperanto ordinal numbers are fixed; they now have hyphens replacing spaces

<h3>19 August 2024</h3>
>Verb Conjugator: Fixed some critical glitches
>Verb Conjugator: Improved Sicilian verb conjugation 

<h3>16 August 2024</h3>
>Adjective Inflector: Fixed an issue regarding the superlative forms of letters with accents
>IPA Converter: Fixed multiple major glitches with the IPA converter
${Noun_Decliner}Added Extremaduran nouns

<h3>15 August 2024</h3>
${Braille_Converter}The old link HARRISMOWBRAY.COM/INTERBRAILLE.HTML now redirects to HARRISMOWBRAY.COM/BRAILLE.HTML; three files were renamed to reflect this
>Verb Conjugator: Started adding Sicilian verbs and changed the appearance of the section a little too

<h3>9 August 2024</h3>
${Braille_Converter}A new, shorter link was established: HARRISMOWBRAY.COM/BRAILLE.HTML in addition to the existing HARRISMOWBRAY.COM/INTERBRAILLE.HTML

<h3>8 August 2024</h3>
>Election Psephology: New section where you can use vote percentages to mathematically determine the composition of parliament after an election; right now it only features the Georgian parliament system
${Noun_Decliner}Fixed the plural for Sicilian words ending in "ia"
>Number Generator: Fixed some issues with Faroese numbers divided by 10
>Number Generator: Now long-scale and short-scale values of numbers will be displayed side-by-side for a given language rather than being different options

<h3>7 August 2024</h3>
>Number Generator: Added Faroese numbers (only cardinal for now)
>Number Generator: Extremaduran was misspelled as Extramaduran, which has now been fixed

<h3>6 August 2024</h3>
>Adjective Inflector: Added Sicilian adjectives
${Noun_Decliner}Added Sicilian nouns
>Number Generator: Added Kazakh, Macedonian, and Turkmen numbers
>Website: Now you can use the "section" parameter in the URL to link to a specific part of the website

<h3>5 August 2024</h3>
>Number Generator: Added two alternative ways to form large numbers for Esperanto and Spanish as well as long-form numbers for English
>Number Generator: Added Extremaduran numbers
>Number Generator: Fixed an issue with displaying some Osage numbers divisible by 10

<h3>4 August 2024</h3>
>Bio: Updated my bio to reflect that I will no longer reside in Washington, D.C. on a permanent basis
${Braille_Converter}Fixed a critical issue affecting Georgian Braille outputs
${Noun_Decliner}Added more irregular English plurals
${Unit_Converter}Added some values for the Iberian unit of mass "arroba"

<h3>24 July 2024</h3>
>Number Generator: Fixed a glitch with large numbers ending in "10", fixed some words for Sicilian numbers

<h3>23 July 2024</h3>
>Color Converter: Temporarily hid the color converter because it has too many issues
>Number Generator: Fixed a rare issue where large Spanish numbers gave incorrect ordinal forms
>Number Generator: Added Sicilian numbers
>Orthography Converter: New section that converts text between different orthographies (so far has Gagauz, Ladino, and Juhuri)
>Time Now: Fixed an issue with times around midnight
>Time Now: The name/abbreviation of the time zone is now displayed

<h3>22 July 2024</h3>
>Currency Converter: Fixed a bug that gave the inversed conversion of currencies
>IPA Converter: Added Georgian pronunciation

<h3>21 July 2024</h3>
>Adjective Inflector: Improved the algorithm for forming comparitive/superlative forms of English adjectives
>Number Generator: Added Osage numbers

<h3>18 July 2024</h3>
>Adjective Inflector: Changed the appearance/functionality a little and added English adjectives
>Currency Converter: Updated/fixed functionality in the inputs of this section
>IPA Converter: Added an error message if an unknown letter is present in the word
>Numeral Converter: Added cardinal numbers for Spanish and Italian

<h3>17 July 2024</h3>
${Braille_Converter}Added drafts for Genoese and Venetian Braille
>Number Converter: Added cardinal numbers for English and Esperanto
>Numeral Converter: Fixed a glitch where the number '0' wouldn't display
>Numeral Converter: Spanish numerals have now moved from "mil millón" to "millardo", at least temporarily; and the limit for numerals has increased to anything under 10²⁴
>Unit Converter: Added radioactive decay measurements "disintegrations per minute (dpm)" and exabecquerel (EBq) as well as the energy unit "liter-atmosphere"

<h3>15 July 2024</h3>
>Adjective Inflector: Fixed an issue with superlative forms of Spanish adjectives ending in "-és"
${Braille_Converter}Added a draft for Lombard Braille
>IPA Converter: New section allows you to convert Hawaiian and Navajo text to the international phonetic alphabet
>Learn Alphabets: Added a new lesson to the Mandaean alphabet course
>Number Generator: New section that lets you convert digits like "1346457" to written-out numbers in English, Esperanto, and Spanish

<h3>14 July 2024</h3>
>Adjective Inflector: Improved the logic for Spanish adjectives and adding the comparitive/superlative forms
>Website: Most text inputs execute programs more quickly now

<h3>13 July 2024</h3>
>Adjective Inflector: Esperanto Adjectives are now available
>Menu: All buttons are the same color again
>Menu: The parts are now organized alphabetically ("About Me" is now on top)
${Noun_Decliner}You can now see the different forms of Esperanto and Spanish nouns
${Unit_Converter}Added four Imperial units of power, energy, and density
${Unit_Converter}Torque is now an included as a category within the Unit Converter
${Unit_Converter}Added sections (sextant, quadrant, etc.) to the Plane Angle category
${Unit_Converter}Fixed the value for carat and added its subdivision, the point
${Unit_Converter}Added a few very large and small units of time and energy

<h3>12 July 2024</h3>
${Unit_Converter}Units of density are now available for conversion
${Unit_Converter}Three small units of area were added as well as the Imperial unit of weight: slug

<h3>11 July 2024</h3>
>Currency Converter: Added twenty-five more currencies from around the world, covering nearly every country finally
${Unit_Converter}Added an few units for energy, length, and force
${Unit_Converter}Acceleration, electric charge, fuel economy, and radioactivity conversions are now available

<h3>9 July 2024</h3>
${Braille_Converter}Revised my Sicilian Braille proposal
>Currency Converter: Added twenty-eight more minor currencies from around the world
${Holidays}Four holidays from Sudan and South Sudan were added

<h3>8 July 2024</h3>
>Adjective Inflector: A new section gives various forms of Spanish adjectives
${Braille_Converter}The link to this website now sends you to HARRISMOWBRAY.COM/INTERBRAILLE.HTML instead of LETTERLY.GITHUB.IO/INTERBRAILLE.HTML
>Currency Converter: Added twenty-five minor currencies from around the world
>Menu: Website Settings part is renamed to Website and the Website Code section is renamed to Code
${Unit_Converter}Astronomical units of mass were added
>Website: Began implementation of fallback fonts

<h3>5 July 2024</h3>
${Braille_Converter}Added a draft proposal for the Sicilian language
${Holidays}Added the Armenian holiday of Constitution Day

<h3>4 July 2024</h3>
${Braille_Converter}Added the Italian language
${Holidays}Added the national day of the Maldives
>Temperature Converter: Rewrote the information; now each temperature scale contains a short anecdote about its historical usage

<h3>2 July 2024</h3>
>Currency Converter: Added ten more currencies from around the world
>Wikipedia: Added my Syloti and Kinyarwandan language Wikipedia articles

<h3>30 June 2024</h3>
${Unit_Converter}Added two units of weight (dekagram and hectogram) and some extremely small units of volume, time, weight, and length

<h3>29 June 2024</h3>
${Unit_Converter}Added some metric units for length as well as some scientific time units
${Unit_Converter}Now you can convert between Energy and Force units

<h3>28 June 2024</h3>
${Noun_Decliner}Significantly improved the logic for generating irregular plurals, added some specific irregular ones (like tooth=>teeth, goose=>geese, etc.)
${Unit_Converter}Solid Angle degrees are now available for conversion (two-dimensional angles are now referred to as Plane Angle on the website)
${Unit_Converter}Many additional units for pressure were added

<h3>25 June 2024</h3>
${Noun_Decliner}New section which shows different forms of nouns, currently just generates plural forms of English nouns
>Verb Conjugator: When the input is empty, no conjugation is shown

<h3>24 June 2024</h3>
>Contact: Only one Viber link shows up, depending on what device you are using
>Currency Converter: Around ten more important currencies were added
${Holidays}Added three holidays from U.S. territories

<h3>23 June 2024</h3>
>Contact: Added my personal Telegram and Viber links (added one for desktop and one for mobile)
>Currency Converter: Updated currency values and made some more precise
>Currency Converter: Added some new global currencies like the Russian ruble and Japanese yen
>Numeral Converter: A message is now displayed if you enter in something other than a numeral (as opposed to displaying a browser alert)
>Numeral Converter: You are asked what type of abjad numerals you are using in fewer situations now
>Numeral Converter: The external website link was moved from LETTERLY.GITHUB.IO/UNINUMBER.HTML to HARRISMOWBRAY.COM/UNINUMBER.HTML
${Unit_Converter}Added Nepalese units of area and volume and the Iranian area unit 'jerib'
>Wikipedia: The menu button to my Wikipedia article now opens up a new area where you can choose which personal Wikipedia article you would like to read out of six languages

<h3>17 June 2024</h3>
${Holidays}Removed the minor Jewish fast day of "Twentieth of Sivan" as I could not find evidence that it is still celebrated
${Holidays}Added the Twelver Shia date for Islamic New Year (1 Rabiʽ al-Awwal)
>Prayer Times: Earlier Shabbat candle-lighting times are given for a few cities in Israel according to tradition, three Israeli cities were added to the list to select from
>Temperature Converter: Added information about temperature scales on the top of the page.

<h3>15 June 2024</h3>
${Holidays}Nativity of Saint John the Baptist was changed to Nativity of Saint John the Forerunner for Orthodox Christianity and a duplicate holiday of Nativity was deleted
>Prayer Times: Added candle lighting times on Friday nights for Judaism

<h3>14 June 2024</h3>
${Calendar_Converter}Wikipedia links for day of the week names in other languages were added
${Holidays}Added the American holiday of Juneteenth as well as three holidays from the Dutch Caribbean
>Settings: Settings are now marked based on what section of the website they apply to
>Time Now: Added AM/PM times to this section of the website for those who selected it
>Trigonometric Functions: Fixed an issue with calculating hacovercosine and archacovercosine
${Unit_Converter}Added Korean units of area
${Updates}Removed the link to the specific changelog for the Learn Alphabets external site
${Updates}Continued visually dividing the types of updates into categories for future sorting

<h3>11 June 2024</h3>
>LinkedIn: Added a new menu block linking to my LinkedIn profile in the "About Me" section
>Menu: Changed the appearance of the menu a little
>Name Day: Fixed a critical issue that did not let the majority of names be displayed
>News: Removed two German news articles which were no longer available
>News: The news section is now easier to navigate
>Numeral Converter: Buttons now appear when the website is unsure of what numeral system you are using
>Numeral Converter: Added three abjad numeral systems and Gardner-Salinas Braille numerals
>Website: The site now additionally exists at a second address - HARRISMOWBRAY.COM

<h3>10 June 2024</h3>
>Bio: Added a new section containing my personal bio
>Currency Converter: U.S. Dollar and Saudi Arabian Riyal are now automatically selected
>Learn Coding: A website I previously made is now externally connected in the menu
>Learn Languages: A website I previous made is now externally connected in the menu
>Menu: Religion/Calendars part renamed to Calendars & Religion, the Mathematics part is now Mathematics & Programming, Me part is now About Me, and About Me is now on the bottom of the menu
>Trigonometric Functions: Added three more inverse hyperbolic functions as well as versed, inverse versed, and external trigonometric functions

<h3>9 June 2024</h3>
${Holidays}Added U.S. Constitution Day and the Israeli Iron Sword War Memorial Day
>Menu: Organized all sections into six new parts - Linguistics, Religion/Calendars, Mathematics, Other Converters, Me, and Website Settings
>Trigonometric Functions: Added a new Mathematics section that calculates various trigonometric functions
${Unit_Converter}Fixed the value for Astronomical Unit
${Unit_Converter}Added a few measurements for length and angles

<h3>7 June 2024</h3>
${Braille_Converter}A new link is developed when you switch languages
>Contact: Contact/Info renamed to Contact
>Contact: My phone number, Whatsapp, and Telegram were all added
>Currency Converter: Added some new currencies for a total of 54
>Keyboards: External webpage I made where you can choose various keyboards to type with
>Menu: Outside websites are now organized together and there have been slight adjustments to the buttons
>Press: New section which shows various media articles around the world that I have been in
>Résumé: Added my résumé as a menu link - I am preparing for this website to become my personal website
>Sunrise/Sunset: "Sunrise/Sunset Times" renamed to "Sunrise/Sunset"
${Unit_Converter}Added a few American measurements of volume and other miscellaneous measurement units
>Verb Conjugator: Added a new section that conjugates Dutch verbs. It is still in development in only has been verified with a few verbs
>Website: Renamed the website to Harris' Website until I think of a better name
>Website: Began reorganizing and renaming files
>Website: Title now says "Harris Mowbray"
>Website Code: Added a menu link to the code for the website
>Wikipedia: Added a menu link to my Wikipedia article

<h3>6 June 2024</h3>
>Calculator: Added a new section (external website) that serves as a simple calculator for many numeral systems
>Currency Converter: Added the Belarusian Ruble, British pound, Indian rupee, and five currencies pegged to the pound and rupee
>Numeral Converter: Added three fonts so that the numerals will display correctly on devices without the proper system fonts
>Numeral Converter: Fixed an issue with rendering numbers with decimals
>Settings: You can now choose between getting prayer direction degrees with decimals or arcminutes
>Temperature Converter: New section converts temperatures between the Fahrenheit, Celsius, Rankine, Kelvin, and Réaumur scales
${Unit_Converter}Added angle, paper, and time unit conversions
${Unit_Converter}Added Japanese units of length, volume, and weight, Taiwanese units of area and mass, and some other traditional units of area
${Updates}Categorized the remainder of the previous updates

<h3>5 June 2024</h3>
>Currency Converter: Added a new section that lets you convert between 32 global currencies
${Holidays}Added two more Islamic holidays
${Unit_Converter}Added Japanese units of area

<h3>4 June 2024</h3>
${Unit_Converter}Length Converter renamed to Unit Converter
${Unit_Converter}You can now convert between power, speed, volume, weight measurements in addition to length
${Unit_Converter}Added many new length measurements; the Scandanavian Mile, micron/micrometer, nanometer, ångström, rack unit, and light-second
${Unit_Converter}Changed "light year" to "light-year"
${Updates}Changed the internal link to lead to the complete separate "Learn Alphabets" update log
${Updates}Began organizing previous updates into categories and reworded a few

<h3>3 June 2024</h3>
${Unit_Converter}Added the Imperial unit 'thou', equivalent to .001 inches

<h3>30 May 2024</h3>
>Prayer Directions: Fixed an issue with giving prayer directions within four cities (Jerusalem, Mecca, Akko, and Nablus)
${Unit_Converter}Added the Imperial unit 'hand', equivalent to four inches

<h3>28 May 2024</h3>
${Unit_Converter}Added Nautical, Astronomical, and Taiwanese units of length

<h3>27 May 2024</h3>
${Calendar_Converter}The Mool Nanakshahi calendar was about a month off and has now been adjusted to fix that
${Holidays}Added Iraqi National Day, Lithuanian Independence Restoration Day, Moshoeshoe Day (Lesotho), and several Turkish holidays
${Holidays}Turkey will now be referred to as Türkiye
>Menu: The menu now has a direct link to my personal website
>Name Days: Fixed issue displaying double names such as Maria Magdalena
${Unit_Converter}This new section "Length Converter" converts lengths from different Metric and Imperial measurements

<h3>14 May 2024</h3>
${Braille_Converter}The converter can now convert ASCII Braille to Unicode Braille (using the 3rd column)
${Braille_Converter}Fixed a Braille issue with invisible Unicode characters
>Menu: Contact/Info, Settings, and Update menu buttons are now gray
${Updates}Added the Braille and Alphabet Website specific update logs to the main update logs

<pre><h3>11 May 2024</h3>
>Color Converter: Fixed some problems with Hue-based color models
${Holidays}Fixed display of Coptic holidays

<h3>9 May 2024</h3>
>Color Converter: Added the HWB color model
${Holidays}Fixed an issue with displaying the holiday Trinity Sunday
>Website: Fixed an issue with the back button
>Website: The old address LETTERLY.GITHUB.IO/CALENDAR.HTML now redirects to the current LETTERLY.GITHUB.IO

<h3>8 May 2024</h3>
>Color Converter: Added the HSV color model to the color converter
>Color Converter: A color sample is now shown under the color converter

<h3>7 May 2024</h3>
>Color Converter: Added the HSL color model to the color converter
>Color Converter: The color converter uses a little more rounding for CMYK
>Color Converter: Informative Wikipedia links are included for each color model
>Name Day: Fixed a glitch with the name day search

<h3>6 May 2024</h3>
>Color Converter: This new section lets you translate color data between RGB, CMYK, and Hexcode
${Holidays}Yom HaShoah is now movable to avoid being on Friday or Sunday
${Holidays}Added another holiday, Macedonian Language Day
>Menu: Links to outside websites in the menu are now colored orange (rather than coral)

<h3>22 April 2024</h3>
${Holidays}Fixed a glitch with how some multi-day holidays were displayed

<pre><h3>6 April 2024</h3>
>Website: The old website address LETTERLY.GITHUB.IO/CALENDAR.HTML redirects to the new one now

<h3>5 April 2024</h3>
>Prayer Directions: Improved how the prayer direction section looks
>Prayer Directions: Great Circle and Rhumb Line calculations are now shown for every religion except Bahá'í (Great Circle only)
${Updates}Made the update section easier to navigate

<h3>4 April 2024</h3>
>Learn Alphabets: Added an external website, the original Letterly website which teaches alphabets
>Website: The website's new address is LETTERLY.GITHUB.IO rather than LETTERLY.GITHUB.IO/CALENDAR.HTML

<h3>1 April 2024</h3>
${Braille_Converter}Separate Braille conversion website is now linked
${Holidays}Added April Fools' Day as a global holiday
${Holidays}Fixed date of Laetare Sunday
${Updates}Fixed some issues with how the changelog was displayed
>Website: Modified the "return to menu" button

<h3>31 March 2024</h3>
>Numeral Converter: My separate numeral converter website is now linked in the menu, full integration coming soon
>Settings: AM/PM times are now an option in settings
>Time Now: Updated the time zones of European countries and Israel (I promise this will eventually be automatic... someday)

<h3>30 March 2024</h3>
${Calendar_Converter}Added the Syloti calendar!
>Name Day: Name Day Today and Find Name Day are now combined into a single Name Day section
>Time Now: Fixed Wikipedia links for decimal time zones
>Website: Website renamed Internationalization Project from Universal Calendar Project
${Updates}The updates are now on the main website not a separate page

<h3>29 March 2024</h3>
${Calendar_Converter}hanged the Saudi Solar Hijri calendar to change days at midnight
${Calendar_Converter}Adjusted the way single digit Hebrew numerals are shown and changed the "thousands place" indicator
${Holidays}Fixed an issue displaying holidays on some days in the far future
${Holidays}Fixed an issue with Zayin Adar being displayed twice during the month of Adar I

<h3>28 March 2024</h3>
${Calendar_Converter}Added the Assyrian calendar!
${Calendar_Converter}Added the Saudi Solar Hijri calendar!
${Calendar_Converter}Fixed an issue with the display of Coptic intercalary months
${Holidays}Assyrian New Year is now shown as 1 Nīsān not 1 April
${Holidays}Added the Fast of Nineveh
${Holidays}Added a few Orthodox/Coptic fasts
${Holidays}Added seven Zoroastrian holidays (added to all three calendars)

<h3>27 March 2024</h3>
${Calendar_Converter}Fixed an issue with the Bahá'í date in Arabic
${Calendar_Converter}The day of the week now has a Wikipedia article attached
${Holidays}Fixed the display of some Zoroastrian holidays
${Holidays}Added the Zoroastrian holidays of Nouroz and Pateti
${Holidays}Added Zoroastrian name-day feasts
>Name Day: The name search now does not care about letter casing

<h3>20 March 2024</h3>
>Prayer Directions: Added the Yazidi prayer direction

<h3>18 March 2024</h3>
${Holidays}Zayin Adar is now on both Adar I and Adar II in leap years
>Time Now: Fixed issue with decimal time zones

<h3>17 March 2024</h3>
${Holidays}Zayin Adar is moved to Adar I in leap years instead of Adar II
>Name Day: Started to fix some Belarusian names (by putting them in the nominative form)

<h3>16 March 2024</h3>
>Name Day: Fixed some issues regarding the name day search
>Time Now: A new section where you can see times and time zones for different cities around the world

<h3>15 March 2024</h3>
${Calendar_Converter}Fixed an issue with how dates are displayed
>Date Formatter: You can now format dates for days other than today
${Holidays}Added three holidays - Maslenitsa, Kupala Night, and Freedom Day (Belarus)
>Name Day: You can now only use the Gregorian calendar to search for name days
>Name Day: You can now search your name to find your name day

<h3>14 March 2024</h3>
${Calendar_Converter}Added the Mandaean word for Parwanaya to the calendar
${Calendar_Converter}Fixed an issue regarding Hebrew and Arabic numerals
${Calendar_Converter}Bahá'í calendar now uses Arabic instead of Persian numerals
${Holidays}Ayyám-i-Há became listed as a holiday and there is no longer a nineteen day feast for this intercalary month
>Name Day: Changed Belarus emoji to ⚪🔴⚪
>Name Day: Added Belarusian name days
>Name Day: Fixed issues with a few Greek name days

<h3>13 March 2024</h3>
>Prayer Directions: Added the city of Erbil
>Prayer Directions: Added the Yarsan direction of prayer

<h3>11 March 2024</h3>
>Date Formatter: New section let's you see how dates are formatted in different locations
${Holidays}Eid al-Adha is now shown as four days instead of one
>Time Now: Canada and USA now updated to daylight savings time... this should be done automatically soon enough

<h3>9 March 2024</h3>
>Sunrise/Sunset: Section reorganized; twilights are now shown as ranges of time

<h3>8 March 2024</h3>
>Name Days: Added name days for Austria, Croatia, Denmark, Estonia, Finland, France, Greece, Italy, Latvia, Norway, Poland, and Spain
>Name Days: Visually organized the name day section a little better
>Website: Changed the font to make ensure consistency in displaying some languages

<h3>7 March 2024</h3>
${Holidays}Fixed display issues with some weekly celebrations
>Menu: Completely reorganized website into six sections with a central menu
>Menu: Contact and Updates are now independent sections, not attached to the calendar
>Name Day: Added a new section, so far the name days of Czechia, Hungary, Lithuania, Slovakia, and Sweden are shown
>Sunrise/Sunset: Added astronomical, nautical, and civil twilights

<h3>3 March 2024</h3>
${Holidays}Monthly celebrations is now called Monthly practices
>Prayer Directions: Added Rhumb line prayer direction calculators

<h3>2 March 2024</h3>
${Holidays}Added a few Ethiopian Christian holidays
>Prayer Directions: Finally fixed issues with the prayer direction determiner
>Prayer Directions: Added a few new cities
>Prayer Directions: Prayer directions now include cardinal directions (N, SE, NW, etc.) and arrows (like ↙)

<h3>1 March 2024</h3>
${Holidays}Added the Mandaean observance of Mbaṭṭal (ominous) days
${Holidays}Added Wednesday and Friday as Orthodox Christian fasting days as well as the Druze meeting day (Thursday)
${Holidays}Added Good Friday and some other Gregorian and Julian holidays related to Easter calculation, as well as Assyrian New Year
${Holidays}Added 26 new national holidays (224 total)
>Prayer Times: Added Mandaean brakha times

<h3>28 February 2024</h3>
${Holidays}Made the holiday of Shavuot two days in the diaspora
${Holidays}Added isru chag to the Three Pilgramage Holidays in Judaism
${Holidays}"National holidays" is now "National/Global holidays"; Leap day, New Year's Eve, and New Year's Day have been moved
${Holidays}Added 58 more national/global holidays (198 total)

<h3>27 February 2024</h3>
${Holidays}Added the Jewish fast days of Zayin Adar, Twentieth of Sivan, and Fast of Behav
${Holidays}Added the Jewish prayer observation of Leil Selichot for the Italian rite of Judaism
${Holidays}Added the Islamic holidays of Laylat al-Miʿraj, Laylat al-Raghaib, and the Night of Power
${Holidays}Added the monthly observances of Yom Kippur Katan and White Nights

<h3>23 February 2024</h3>
${Holidays}Added Ethiopian Christmas, the Pascal Triduum, Shrove Monday, Quinquagesima, Sexagesima, Septuagesima, and Allhallowtide
${Holidays}Added 30 more national holidays (137 total)

<h3>22 February 2024</h3>
${Holidays}Added the Druze holiday of Ziyarat al-Nabi Shu'ayb
${Holidays}Added 41 more national holidays (107 total)

<h3>21 February 2024</h3>
${Calendar_Converter}Julian and Revised Julian calendars now both start at sunset
>Prayer Directions: Added the Saudi cities of Medina and Riyadh
${Holidays}National and Religious/Cultural Holidays are now separated
${Holidays}Added the Orthodox holidays of Clean Monday and Great Lent
>Holdays: Added 66 national holidays from around the world!
${Holidays}Added Leap Day as a holiday

<h3>20 February 2024</h3>
${Holidays}Added three Ahmadi holidays
${Holidays}Fixed the way some observances are displayed
${Holidays}Some Shia observances were added
${Holidays}Three Yazidi holidays were added too
${Holidays}Added the Mandaean holy day of the week, Habshaba (Sunday) and the Samaritan holy day Shabbat (Saturday)

<h3>5 February 2024</h3>
${Holidays}Added two special Shabbats: Chazon & Shira

<h3>4 February 2024</h3>
${Holidays}Added the rare Jewish observance of Birkat Hachama which happens once every 28 years

<h3>3 February 2024</h3>
${Holidays}Added seven special Shabbat types (Shuva, Sehkalim, Zachor, Parah, HaChodesh, Nachamu, & HaGadol)

<h3>2 February 2024</h3>
${Holidays}Added the Jewish holiday of Chag HaBanot, as well as Leil Selichot (in both Ashkenazi and Sephardi tradition)
${Holidays}Added the Islamic observance of Jumu'atul-Wida

<h3>1 February 2024</h3>
${Holidays}Added the Islamic holidays of Juloos-e-Ghausiya and Tasu'a
${Holidays}Added seven Iranian (Solar Hijri) holidays
${Holidays}Added two Mandaean holidays and made the Feast of the Great Shishlam last two days

<h3>31 January 2024</h3>
${Holidays}Added the Kurdistan Jewish holiday of Seharane
>Prayer Directions: Added the Samaritan direction of prayer
>Prayer Times: Reorganized the daily prayer time section
>Prayer Times: Included many more zmanim

<h3>25 January 2024</h3>
${Holidays}Added the Egyptian Jewish holiday of Seder El-Tawhid

<h3>16 January 2024</h3>
>Prayer Directions: Added a few more cities

<h3>12 January 2024</h3>
${Calendar_Converter}Fixed date of Berber calendar
${Holidays}Fixed the display of Bengali New Year and Yennayer

<h3>9 January 2024</h3>
${Holidays}Changed Christian Sabbath to "Lord's Day"
>Prayer Directions: Added the cities of Akko, Jakarta and Melbourne
>Prayer Directions: Added the Mizrah angle
${Updates}Renamed "Changelog" to Updates and slightly changed the appearance

<h3>6 January 2024</h3>
>Prayer Directions: The Qibla angle is set to "Face the Kaaba" if the city selected is Mecca
${Holidays}Added New Year's Day as a holiday
${Holidays}I changed the way some religious holidays are displayed
>Time Now: Fixed Mexico City's time zone

<h3 id="2024">2 January 2024</h3>
>Prayer Directions: The direction of the Qibla and Qiblih is now shown too
>Prayer Times: Four of the five daily Islamic prayers are shown too, as are three Jewish times [Daybreak, end of Shabbat & Sof Zman Kriyat Shema]
>Sunrise/Sunset: Now you can select location to see sunrise/sunset times
>Website: Changed website title from Date Converter to Universal Calendar Project

<h3>27 December 2023</h3>
${Holidays}Fixed an issue with the display of Zoroastrian holidays

<h3>23 December 2023</h3>
${Holidays}Shab-e-Barat, a Muslim holiday, was added

<h3>22 December 2023</h3>
${Holidays}The Jewish fast day, '10th of Tevet' was added

<h3>20 December 2023</h3>
${Holidays}Added the holy day of the week for Judaism, Christianity, Islam, and the Bahá'í Faith
${Holidays}Added the monthly observances of Rosh Chodesh [Judaism] and the Nineteen Day Feasts [Bahá'í Faith]

<h3>15 December 2023</h3>
${Holidays}Fixed another issue regarding Hanukkah days

<h3>8 December 2023</h3>
${Holidays}Fixed an issue regarding Hanukkah days

<h3>1 November 2023</h3>
${Holidays}Added the Bahá'í observances of the Nineteen-Day Fast and Riḍván
${Holidays}Fixed an issue of Bahá'í holidays not being displayed

<h3>29 September 2023</h3>
${Holidays}Starting to change how individual sects display holidays

<h3>30 August 2023</h3>
${Holidays}Fixed an issue with religions' Wikipedia article links

<h3>23 August 2023</h3>
${Holidays}Added Wikipedia articles for the religions

<h3>22 August 2023</h3>
${Calendar_Converter}Fixed a minor glitch with date calculation in years centuries away
${Holidays}Added the Mandaean festival of Parwanaya
${Holidays}Names of religions are shown for holidays instead of the calendar name

<h3>21 August 2023</h3>
${Calendar_Converter}Fixed an issue with displaying a link for the month of Adar in certain years
${Holidays}Added the Christian holiday of Candlemas
${Holidays}Labelled the holidays section and added an 'observances' section for longer holiday periods
${Holidays}The observances so far are the Three Weeks, the Nine Days, the Ten Days of Repentance (all Judaism), Ramadan (Islam), Lent and Christmastide (Christian)

<h3>16 August 2023</h3>
${Holidays}Rosh Hashanah Lemaasar Behema, Purim Katan, Shushan Purim Katan, and Purim Meshulash added to the Hebrew calendar

<h3>15 August 2023</h3>
${Calendar_Converter}Fixed an issue in displaying the first day of the week of the Gregorian calendar

<h3>31 July 2023</h3>
${Calendar_Converter}Added the Dilami calendar
${Calendar_Converter}Adjusted intercalculation of Solar Hijri and Tabarian calendars

<h3>18 July 2023</h3>
${Holidays}Added Shushan Purim, fixed a Tisha B'Av date issue with the Hebrew calendar

<h3>14 July 2023</h3>
${Calendar_Converter}Fixed a glitch with the day selector
${Calendar_Converter}Moved Javanese, Ethiopian and Coptic's 'first day of week' to Monday
>Website: Minor changes to website appearance

<h3>5 July 2023</h3>
${Calendar_Converter}Correction made - the Bengali calendar days start at sunrise
${Calendar_Converter}Also corrected the Bengali calendar by one day oops :D
${Holidays}All the remaining holidays were readded
${Holidays}Some Jewish holiday calculation issues were addressed
${Holidays}The Jewish holiday of Mimouna was added
${Holidays}Added Bengali, Berber, Javanese, Islamic, Julian, Javanese, Coptic, and Ethiopian New Years

<h3>4 July 2023</h3>
${Calendar_Converter}Doubled range of almost every calendar to 760 years!
${Calendar_Converter}Added Bengali language era name
${Holidays}Fixed a Zoroastrian holiday's link
${Holidays}Added back the majority of holidays
${Updates}The changelog is now an HTML file, not a text document

<h3>2 July 2023</h3>
${Calendar_Converter}You can now select dates with the Japanese calendar
${Calendar_Converter}Almost all calendars now have 380 years searchable (around a 160 year increase from the previous maximum)
${Holidays}Holidays are no longer visible :( But the website loads much faster

<h3>30 June 2023</h3>
${Calendar_Converter}You can now select dates with the Mayan calendar

<h3>28 June 2023</h3>
${Calendar_Converter}Over half the calendar's months are now underlined and linked to articles
${Calendar_Converter}Shows first day of week for every calendar, "not applicable" symbol added
${Calendar_Converter}Extended reach of Julian and Kurdish calendars
${Calendar_Converter}Added the Japanese calendar

<h3>24 June 2023</h3>
${Calendar_Converter}First day now shown for Indian National and Kurdish calendars
${Calendar_Converter}Fixed an issue with how first day and day start time was displayed
${Calendar_Converter}Old Coptic numerals were added to the Coptic calendar
${Holidays}Shrove Tuesday and Ash Wednesday were added to the Gregorian calendar

<h3>20 June 2023</h3>
${Calendar_Converter}Date now displayed under calendar selector
${Calendar_Converter}French Republican calendar now selectable
${Calendar_Converter}French Republican calendar now shows Roman numerals

<h3>19 June 2023</h3>
${Calendar_Converter}Added that the 'day starts at sunset' to Coptic and Ethiopian
${Calendar_Converter}Added information on the first day of the week by calendar
${Calendar_Converter}Added the Mayan and French Republican calendars
${Calendar_Converter}Removed the panel showing day of the week

<h3>4 June 2023</h3>
${Calendar_Converter}More calendars can go to 2117 CE now
${Calendar_Converter}Fixed issue with selecting Julian calendar
${Holidays}Added Christmas for the Armenian Patriarchate of Jerusalem (January 19th on the Gregorian calendar)
${Holidays}Added Western and Eastern Easter, which has a complicated algorithm
${Holidays}Added Christian holidays based on Easter: Palm Sunday, Maundy Thursday, Feast of the Ascension, Pentecost, and Trinity Sunday
>Website: Made some small stylistic changes

<h3>3 June 2023</h3>
${Holidays}Fixed Julian calendar holiday issue

<h3>30 May 2023</h3>
${Calendar_Converter}Added Javanese calendar (may need more research)
${Calendar_Converter}The start of the day (midnight, sunrise, or sunset) is visible on all calendars now
${Calendar_Converter}Increasing the reach by over 50 years for half the calendars :)
${Holidays}Fixed date of Armenian Christmas
${Holidays}Added three Sikh holidays
${Holidays}There are now additional links further explaining some holidays
${Holidays}Added Zoroastrian holidays to the Qadimi and Shahanshahi calendars

<h3>26 May 2023</h3>
${Holidays}Added some Gregorian, Julian and Zoroastrian holidays

<h3>25 May 2023</h3>
${Calendar_Converter}Added the Kurdish calendar
${Calendar_Converter}Fixed a glitch with selecting certain Hebrew months
${Holidays}Fixed some issues with how some holidays were displayed
${Holidays}Added the Jewish holiday of Pesach (Passover)
${Holidays}Added Hebrew fasts which move to avoid being on Saturday (Shabbat): "Fast of Gedalia", "Fast of Esther", "Fast of the Firstborn"

<h3>24 May 2023</h3>
${Calendar_Converter}The days of the week are now in all six official UN languages
${Calendar_Converter}Changed the apperance of the inputs and made some minor stylistic edits
${Calendar_Converter}Ethiopian numerals are now used on the Ethiopian calendar
${Calendar_Converter}Fixed a glitch involving months with multiple words in the name
${Calendar_Converter}Show which calendars have days that start on sunrise or sunset (rather than midnight)

<h3>23 May 2023</h3>
${Calendar_Converter}Renamed Coptic epagomenal month to "Pi Kogi Enavot"
${Calendar_Converter}All calendars are shown in their native languages (and numeral systems)
${Calendar_Converter}Switched the order of Tabarian months to be correct
>Contact: Added my email

<h3>22 May 2023</h3>
${Calendar_Converter}Added "Julian-based" as a calendar selection category
${Calendar_Converter}Removed the Burmese calendar for technical reasons :(
${Calendar_Converter}Added the day in French :)
${Calendar_Converter}Around half the calendars are now additionally shown in their native languages
${Holidays}Added Armenian Christmas (Jan 6) as a holiday
${Holidays}Added holidays to the Julian calendar

<h3>21 May 2023</h3>
${Calendar_Converter}Badi calendar renamed to Bahá'í
${Holidays}Added the Shia date for the holiday of Mawlid and added Eid al-Ghadir
${Holidays}Added Nativity of John the Baptist as a Christian holiday
${Holidays}Holidays can now be multiday (made Hanukkah 8 days and Rosh Hashanah 2 days)
${Holidays}Added the Jewish festival of Sukkot (7 days)

<h3>20 May 2023</h3>
${Holidays}Holidays are now shown for the Hebrew, Gregorian, Islamic Tabular, Mandaean, and Badi calendars
${Holidays}Each holiday has a link to relevant information

<h3>6 May 2023</h3>
${Calendar_Converter}Added Nanakshahi era "KE" and Nepal Sambat Solar era "NE"

<h3>4 May 2023</h3>
${Calendar_Converter}Added Mandaean era "AA" and Indian National era "SE"

<h3>1 May 2023</h3>
${Calendar_Converter}Simplified the Zoroastrian calendars' names
${Calendar_Converter}Reorganized the 'calendar' selector based on calendar type
${Calendar_Converter}The Hebrew month of Adar is now called Adar I in leap years
${Calendar_Converter}Added the Burmese calendar, there may be some errors as there is very little information about it in English

<h3>30 April 2023</h3>
${Calendar_Converter}Issue with selecting Nisan in some Hebrew calendar years solved
${Calendar_Converter}Fixed a critical error which broke the website when the current Gregorian month day was less than 10

<h3>22 April 2023</h3>
${Calendar_Converter}Fixed upper bound for Tabarian
${Calendar_Converter}Added the Zoroastrian Fasli, Qadimi, and Shahanshahi calendars
${Calendar_Converter}Revised the way months are displayed
>Contact: Added my personal website to the contact information

<h3>20 April 2023</h3>
${Calendar_Converter}Made inputting dates easier
${Calendar_Converter}I added another Islamic Tabular calendar, the Islamic Tabular Tayyibi calendar
${Calendar_Converter}The upper/lower year limits are now shown for every calendar now, not just Gregorian
${Calendar_Converter}Fixed some of the Wikipedia links
${Calendar_Converter}Added Nepal Sambat Solar and Thai Solar calendars
${Calendar_Converter}Added Tabarian, it could have leap year algorithm issues :(
${Calendar_Converter}Fixed Bengali calendar issue
${Calendar_Converter}Fixed an issue with Revised Julian calendar leap years
${Calendar_Converter}Eras are now displayed with most calendars (like CE, AD, AH, SH, BE etc.)
>Website: I added my name and a link to the changelog at the bottom
>Website: Made the website a little more aesthetic and added the Montserrat font

<h3>19 April 2023</h3>
${Calendar_Converter}Added Hebrew and Islamic Tabular calendars
${Calendar_Converter}The website now automatically loads the current date
${Calendar_Converter}Improved the date selection scheme

<h3>18 April 2023</h3>
${Calendar_Converter}Added the Badi, Bengali, Juche, Julian, Minguo, Mool Nanakshahi, and Revised Julian calendars
${Calendar_Converter}Indian is now called Indian National, Iranian is now called Solar Hijri
${Calendar_Converter}Added Wikipedia links to the calendars
${Calendar_Converter}Reduced upper year limit to 2060 CE (sorry, will increase later)

<h3>15 January 2023</h3>
${Calendar_Converter}Added the Coptic calendar

<h3>14 January 2023</h3>
${Calendar_Converter}Added the Ethiopian calendar

<h3 id="2023">13 January 2023</h3>
${Updates}I started the changelog today :)
${Calendar_Converter}So far the program converts dates in the Gregorian, Armenian, Berber, Indian, Iranian, and Mandaean calendars from approximately 1901 to 2172 CE</pre>`

/*
CATEGORIES TO MAKE

Adjective Inflector [added]
Noun Decliner [added]
Number Generator [added]
Orthography Converter [added]
IPA Converter [added]
Learn Coding [added, needs replacement]
Learn Braille
Learn Languages [added, needs replacement]
Formulae [kinda added, needs huge update]
Code Converter
Programming Dictionary
Morse Converter [added]
*/


/*
KNOWN ISSUES 
Islamic Prayer time Asr isn't calculated
Issues with Iranian Kurdish Tabarian leap year calculation
Compass magnet not taken into account
Extend Bahai and Hebrew calendar to end of time
Zmanim of specific cities (added)
More specific Christian denominations
Add locations for some holidays
Add second Jewish zmanim opinion + relative hours
Daylight savings isn't implemented
Thai calendar day selector issue
Japan calendar issues lol
Shovavim should be calced
*/

log = `<h1>Updates</h1><p style='text-align:center'>Go to: <a href="#2023">2023</a> | <a href="#2024">2024</a> | <a href="#2025">2025</a> | <a href="https://harrismowbray.com/braille.txt" target="_blank">Braille Converter Updates</a></p>` + log
changelog.innerHTML = log