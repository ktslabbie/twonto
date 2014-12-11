var stopwords={"a":1,"able":1,"about":1,"above":1,"according":1,"accordingly":1,"across":1,"actually":1,"after":1,"afterwards":1,"again":1,"against":1,"ain't":1,"all":1,"allow":1,"allows":1,"almost":1,"alone":1,"along":1,"already":1,"also":1,"although":1,"always":1,"am":1,"among":1,"amongst":1,"an":1,"and":1,"another":1,"any":1,"anybody":1,"anyhow":1,"anyone":1,"anything":1,"anyway":1,"anyways":1,"anywhere":1,"apart":1,"appear":1,"appreciate":1,"appropriate":1,"are":1,"aren't":1,"around":1,"as":1,"aside":1,"ask":1,"asking":1,"associated":1,"at":1,"available":1,"away":1,"awfully":1,"be":1,"became":1,"because":1,"become":1,"becomes":1,"becoming":1,"been":1,"before":1,"beforehand":1,"behind":1,"being":1,"believe":1,"below":1,"beside":1,"besides":1,"best":1,"better":1,"between":1,"beyond":1,"both":1,"brief":1,"but":1,"by":1,"c'mon":1,"c's":1,"came":1,"can":1,"can't":1,"cannot":1,"cant":1,"cause":1,"causes":1,"certain":1,"certainly":1,"changes":1,"clearly":1,"co":1,"com":1,"come":1,"comes":1,"concerning":1,"consequently":1,"consider":1,"considering":1,"contain":1,"containing":1,"contains":1,"corresponding":1,"could":1,"couldn't":1,"course":1,"currently":1,"definitely":1,"described":1,"despite":1,"did":1,"didn't":1,"different":1,"do":1,"does":1,"doesn't":1,"doing":1,"don't":1,"done":1,"down":1,"downwards":1,"during":1,"each":1,"edu":1,"eg":1,"eight":1,"either":1,"else":1,"elsewhere":1,"enough":1,"entirely":1,"especially":1,"et":1,"etc":1,"even":1,"ever":1,"every":1,"everybody":1,"everyone":1,"everything":1,"everywhere":1,"ex":1,"exactly":1,"example":1,"except":1,"far":1,"few":1,"fifth":1,"first":1,"five":1,"followed":1,"following":1,"follows":1,"for":1,"former":1,"formerly":1,"forth":1,"four":1,"from":1,"further":1,"furthermore":1,"get":1,"gets":1,"getting":1,"given":1,"gives":1,"go":1,"goes":1,"going":1,"gone":1,"got":1,"gotten":1,"greetings":1,"had":1,"hadn't":1,"happens":1,"hardly":1,"has":1,"hasn't":1,"have":1,"haven't":1,"having":1,"he":1,"he's":1,"hello":1,"help":1,"hence":1,"her":1,"here":1,"here's":1,"hereafter":1,"hereby":1,"herein":1,"hereupon":1,"hers":1,"herself":1,"hi":1,"him":1,"himself":1,"his":1,"hither":1,"hopefully":1,"how":1,"howbeit":1,"however":1,"i'd":1,"i'll":1,"i'm":1,"i've":1,"ie":1,"if":1,"ignored":1,"immediate":1,"in":1,"inasmuch":1,"inc":1,"indeed":1,"indicate":1,"indicated":1,"indicates":1,"inner":1,"insofar":1,"instead":1,"into":1,"inward":1,"is":1,"isn't":1,"it":1,"it'd":1,"it'll":1,"it's":1,"its":1,"itself":1,"just":1,"keep":1,"keeps":1,"kept":1,"know":1,"knows":1,"known":1,"last":1,"lately":1,"later":1,"latter":1,"latterly":1,"least":1,"less":1,"lest":1,"let":1,"let's":1,"like":1,"liked":1,"likely":1,"little":1,"look":1,"looking":1,"looks":1,"ltd":1,"mainly":1,"many":1,"may":1,"maybe":1,"me":1,"mean":1,"meanwhile":1,"merely":1,"might":1,"more":1,"moreover":1,"most":1,"mostly":1,"much":1,"must":1,"my":1,"myself":1,"name":1,"namely":1,"nd":1,"near":1,"nearly":1,"necessary":1,"need":1,"needs":1,"neither":1,"never":1,"nevertheless":1,"new":1,"next":1,"nine":1,"no":1,"nobody":1,"non":1,"none":1,"noone":1,"nor":1,"normally":1,"not":1,"nothing":1,"novel":1,"now":1,"nowhere":1,"obviously":1,"of":1,"off":1,"often":1,"oh":1,"ok":1,"okay":1,"old":1,"on":1,"once":1,"one":1,"ones":1,"only":1,"onto":1,"or":1,"other":1,"others":1,"otherwise":1,"ought":1,"our":1,"ours":1,"ourselves":1,"out":1,"outside":1,"over":1,"overall":1,"own":1,"particular":1,"particularly":1,"per":1,"perhaps":1,"placed":1,"please":1,"plus":1,"possible":1,"presumably":1,"probably":1,"provides":1,"que":1,"quite":1,"qv":1,"rather":1,"rd":1,"re":1,"really":1,"reasonably":1,"regarding":1,"regardless":1,"regards":1,"relatively":1,"respectively":1,"right":1,"rt":1,"said":1,"same":1,"saw":1,"say":1,"saying":1,"says":1,"second":1,"secondly":1,"see":1,"seeing":1,"seem":1,"seemed":1,"seeming":1,"seems":1,"seen":1,"self":1,"selves":1,"sensible":1,"sent":1,"serious":1,"seriously":1,"seven":1,"several":1,"shall":1,"she":1,"should":1,"shouldn't":1,"since":1,"six":1,"so":1,"some":1,"somebody":1,"somehow":1,"someone":1,"something":1,"sometime":1,"sometimes":1,"somewhat":1,"somewhere":1,"soon":1,"sorry":1,"specified":1,"specify":1,"specifying":1,"still":1,"sub":1,"such":1,"sup":1,"sure":1,"t's":1,"take":1,"taken":1,"tell":1,"tends":1,"th":1,"than":1,"thank":1,"thanks":1,"thanx":1,"that":1,"that's":1,"thats":1,"the":1,"their":1,"theirs":1,"them":1,"themselves":1,"then":1,"thence":1,"there":1,"there's":1,"thereafter":1,"thereby":1,"therefore":1,"therein":1,"theres":1,"thereupon":1,"these":1,"they":1,"they'd":1,"they'll":1,"they're":1,"they've":1,"think":1,"third":1,"this":1,"thorough":1,"thoroughly":1,"those":1,"though":1,"three":1,"through":1,"throughout":1,"thru":1,"thus":1,"to":1,"together":1,"too":1,"took":1,"toward":1,"towards":1,"tried":1,"tries":1,"truly":1,"try":1,"trying":1,"twice":1,"two":1,"un":1,"under":1,"unfortunately":1,"unless":1,"unlikely":1,"until":1,"unto":1,"up":1,"upon":1,"us":1,"use":1,"used":1,"useful":1,"uses":1,"using":1,"usually":1,"value":1,"various":1,"very":1,"via":1,"viz":1,"vs":1,"want":1,"wants":1,"was":1,"wasn't":1,"way":1,"we":1,"we'd":1,"we'll":1,"we're":1,"we've":1,"welcome":1,"well":1,"went":1,"were":1,"weren't":1,"what":1,"what's":1,"whatever":1,"when":1,"whence":1,"whenever":1,"where":1,"where's":1,"whereafter":1,"whereas":1,"whereby":1,"wherein":1,"whereupon":1,"wherever":1,"whether":1,"which":1,"while":1,"whither":1,"who":1,"who's":1,"whoever":1,"whole":1,"whom":1,"whose":1,"why":1,"will":1,"willing":1,"wish":1,"with":1,"within":1,"without":1,"won't":1,"wonder":1,"would":1,"would":1,"wouldn't":1,"yes":1,"yet":1,"you":1,"you'd":1,"you'll":1,"you're":1,"you've":1,"your":1,"yours":1,"yourself":1,"yourselves":1,"zero":1};


var GT_USERS = {};
var GT_TOPICS = {};
var GT_SUBTOPICS = {};
var userCount = 0;

var gtFileInput = $('#gtfile');
var gtUploadButton = $('#gtupload');

var utils = {
		/* Converts an uploaded ground truth file to a collection of sets for easy lookup. */
		convertGTToJSON: function(e) {
			var file = e.target.result;
			var results;

			var currentTopic = "";
			var currentSubTopic = "";

			if (file && file.length) {
				results = file.split("\n");

				_.each(results, function(result) {
					result = result.trim();

					if(result == "") return;

					else if(result.charAt(0) == ":") {
						currentTopic = result.substring(1,result.length-1);
						GT_TOPICS[currentTopic] = {};
					} else if(result.charAt(0) == "-") {
						currentSubTopic = result.substring(1,result.length-1);
						GT_SUBTOPICS[currentSubTopic] = {};
					} else {
						var currentUser = result.split("\t")[0];
						var currentScore = result.split("\t")[1];

						if(GT_USERS[currentUser] == null) {
							GT_USERS[currentUser] = {};
							userCount++;
						}
						GT_USERS[currentUser][currentTopic] = currentScore;
						GT_USERS[currentUser][currentSubTopic] = currentScore;
						GT_TOPICS[currentTopic][currentUser] = currentScore;
						GT_SUBTOPICS[currentSubTopic][currentUser] = currentScore;
					}
				});
			}
		},
}

//Function to upload a DCG file.
gtUploadButton.on('click', function() {
	if (!window.FileReader) {
		alert("Your browser is not supported.");
		return false;
	}

	var input = gtFileInput.get(0);
	var reader = new FileReader();

	if (input.files.length) {
		var textFile = input.files[0];
		reader.readAsText(textFile);

		$(reader).on('load', utils.convertGTToJSON);
		alert("Ground truth loaded!");
	} else {
		alert("Please upload a file before continuing.");
	} 
});



/* 
 * Function to evaluate communities based on accuracy.
 * Input: array of user arrays (clusters with members).
 * 
 * */
function evaluateClusteringAccuracy(clusters, userCount) {
	var a = 0, b = 0, c = 0, d = 0;
	var done = false;
	var accuracy = 0;
	var precision = 0;
	var output = "";

	if(_.isEmpty(GT_USERS) || _.isEmpty(GT_TOPICS)) {
		console.log("ERROR: cannot evaluate clusters. Upload a ground truth first!");
		return;
	}

	var clusterUserCount = 0;
	var clusterUserSet = {};

	output += "Users per topic:\n\n";
	for(var i = 0; i < clusters.length; i++) {
		var tUsers = clusters[i];
		output += "Topic " + i + ": ";

		for(var j = 0; j < tUsers.length; j++) {
			output += tUsers[j] + ", ";
			clusterUserCount++;
			clusterUserSet[tUsers[j]] = true;
		}

		output += "\n";
	}

	var nullCluster = [];

	/*for(var user in GT_USERS) {
		if(!(user in clusterUserSet)) {
			nullCluster.push(user);
		}
	}

	clusters.push(nullCluster);*/

	_.each(clusters, function(cluster) {
		for(var i = 0; i < cluster.length-1; i++) {
			var userA = cluster[i];
			for(var j = i+1; j < cluster.length; j++) {
				var userB = cluster[j];

				for(var topic in GT_TOPICS) {
					if(GT_TOPICS[topic][userA] && GT_TOPICS[topic][userB]) {
						a++;
						done = true;
						break;
					}
				}

				if(!done) b++;
				done = false;
			}
		}
	});

	for(var i = 0; i < clusters.length-1; i++) {
		var clusterA = clusters[i];
		for(var j = i+1; j < clusters.length; j++) {
			var clusterB = clusters[j];
			_.each(clusterA, function(userA) {
				_.each(clusterB, function(userB) {
					for(var topic in GT_TOPICS) {
						if(GT_TOPICS[topic][userA] && GT_TOPICS[topic][userB]) {
							c++;
							done = true;
							break;
						}
					}

					if(!done) d++;
					done = false;
				});
			});
		}
	}

	//var d = (n*(n-1)/2) - (a+b+c);
	console.log("a: " + a + ", b: " + b + ", c: " + c + ", d: " + d);
	console.log("Accuracy: " + ((a+d)/(a+b+c+d)));

	var mcc = (a*d - b*c) / Math.sqrt( (a+b)*(a+c)*(d+b)*(d+c) );
	var precision = a / (a+b);
	var recall = a / (a+c);
	var fScore = 2*((precision*recall)/(precision+recall));

	console.log("ClusterUsers / AllUsers: " + clusterUserCount + " / " + userCount);
	var corr = clusterUserCount / userCount;
	
	console.log("Precision: " + precision + ", corrected for user count: " + precision*corr);
	console.log("Recall: " + recall + ", corrected for user count: " + recall*corr);
	console.log("F-score: " + fScore + ", corrected for user count: " + fScore*corr);
	console.log("MCC: " + mcc + ", corrected for user count: " + mcc*corr);

	console.log(output);
}