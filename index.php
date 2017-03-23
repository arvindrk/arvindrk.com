<!DOCTYPE html>
<html>
  <head>
    <title>Arvind Rk - Interactive Résumé</title>
    <link rel="shortcut icon" href="img/tab.png" height="300px" width="300px">
    <meta charset="utf-8">
    <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
    <!-- css -->
    <link href="css/bootstrap.min.css" rel="stylesheet" media="screen">
    <link href="css/style.css" rel="stylesheet" media="screen">
    <link href="css/default.css" rel="stylesheet" media="screen">
	<link href="fonts/font-awesome.min.css" rel="stylesheet" media="screen">
	<link href="css/scrolling-nav.css" rel="stylesheet">
	<link href="css/ss.css" rel="stylesheet">
	<script src="js/modernizr.custom.js"></script>
	<script>
		function loadXMLDoc()
		{
		var xmlhttp;
		if (window.XMLHttpRequest)
		  {// code for IE7+, Firefox, Chrome, Opera, Safari
		  xmlhttp=new XMLHttpRequest();
		  }
		else
		  {// code for IE6, IE5
		  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
		  }
		xmlhttp.onreadystatechange=function()
		  {
		  if (xmlhttp.readyState==4 && xmlhttp.status==200)
		    {
		    document.getElementById("myDiv").innerHTML=xmlhttp.responseText;
		    }
		  }
		xmlhttp.open("GET","thank.txt",true);
		xmlhttp.send();
		}
	</script>
   </head>
  <body id="page-top" data-spy="scroll" data-target=".navbar-fixed-top">

    <!-- Navigation -->
    <nav class="navbar navbar-default navbar-fixed-top" role="navigation">
        <div class="container">
            <div class="navbar-header page-scroll">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand page-scroll wow fadeInUp bnx" data-wow-delay="0.2s" href="#intro"><h6>&nbsp;&nbsp;Arvind RK</h6></a>
            </div>

            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse navbar-ex1-collapse">
                <ul class="nav navbar-nav">
                    <!-- Hidden li included to remove active class from about link when scrolled up past about section -->
                    <li>
                        <a class="page-scroll wow fadeInUp" data-wow-delay="0.5s" href="#about">About</a>
                    </li>
                    <li>
                        <a class="page-scroll wow fadeInUp" data-wow-delay="0.7s" href="#services">Experiences</a>
                    </li>
                    <li>
                        <a class="page-scroll wow fadeInUp" data-wow-delay="0.9s" href="#works">Interests</a>
                    </li>
                    <li>
                        <a class="page-scroll wow fadeInUp" data-wow-delay="1.1s" href="#abilities">Abilities</a>
                    </li>
                    <li>
                        <a class="page-scroll wow fadeInUp" data-wow-delay="1.3s" href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
            <!-- /.navbar-collapse -->
        </div>
        <!-- /.container -->
    </nav>
	<div class="menu-area">
			<div id="dl-menu" class="dl-menuwrapper">
						<button class="dl-trigger tr">Open Menu</button>
						<ul class="dl-menu">
							<li><a href="#intro">Home</a>
								<ul class="dl-submenu">
									<li><a href="#intro" class="icon-home">&nbsp;&nbsp;Home</a></li>
									<li><a href="#about" class="icon-user">&nbsp;&nbsp;About me</a></li>
									<li><a href="#services" class="icon-list-alt">&nbsp;&nbsp;Experiences</a></li>
									<li><a href="#works" class="icon-star">&nbsp;&nbsp;Interests</a></li>
									<li><a href="#abilities" class="icon-user">&nbsp;&nbsp;Abilities</a></li>
								</ul>
							</li>
							<li><a href="#about">About me</a>
								<ul class="dl-submenu">
									<li><a href="#intro" class="icon-home">&nbsp;&nbsp;Home</a></li>
									<li><a href="#about" class="icon-user">&nbsp;&nbsp;About me</a></li>
									<li><a href="#services" class="icon-list-alt">&nbsp;&nbsp;Experiences</a></li>
									<li><a href="#works" class="icon-star">&nbsp;&nbsp;Interests</a></li>
									<li><a href="#abilities" class="icon-user">&nbsp;&nbsp;Abilities</a></li>
								</ul>
							</li>
							<li><a href="#services">Experiences</a>
								<ul class="dl-submenu">
									<li><a href="#intro" class="icon-home">&nbsp;&nbsp;Home</a></li>
									<li><a href="#about" class="icon-user">&nbsp;&nbsp;About me</a></li>
									<li><a href="#services" class="icon-list-alt">&nbsp;&nbsp;Experiences</a></li>
									<li><a href="#works" class="icon-star">&nbsp;&nbsp;Interests</a></li>
									<li><a href="#abilities" class="icon-user">&nbsp;&nbsp;Abilities</a></li>
								</ul>
							</li>
							<li><a href="#works">Interests</a>
								<ul class="dl-submenu">
									<li><a href="#intro" class="icon-home">&nbsp;&nbsp;Home</a></li>
									<li><a href="#about" class="icon-user">&nbsp;&nbsp;About me</a></li>
									<li><a href="#services" class="icon-list-alt">&nbsp;&nbsp;Experiences</a></li>
									<li><a href="#works" class="icon-star">&nbsp;&nbsp;Interests</a></li>
									<li><a href="#abilities" class="icon-user">&nbsp;&nbsp;Abilities</a></li>
								</ul>
							</li>
							<li><a href="#abilities">Abilities</a>
								<ul class="dl-submenu">
									<li><a href="#intro" class="icon-home">&nbsp;&nbsp;Home</a></li>
									<li><a href="#about" class="icon-user">&nbsp;&nbsp;About me</a></li>
									<li><a href="#services" class="icon-list-alt">&nbsp;&nbsp;Experiences</a></li>
									<li><a href="#works" class="icon-star">&nbsp;&nbsp;Interests</a></li>
									<li><a href="#abilities" class="icon-user">&nbsp;&nbsp;Abilities</a></li>
								</ul>
							</li>
							<li><a href="#contact">Contact</a>
								<ul class="dl-submenu">
									<li><a href="#" class="icon-facebook">&nbsp;&nbsp;Facebook</a></li>
									<li><a href="https://twitter.com/Arvind_rko" class="icon-twitter">&nbsp;&nbsp;Twitter</a></li>
									<li><a href="https://gist.github.com/arvindrk" class="icon-github">&nbsp;&nbsp;Github</a></li>
									<li><a href="https://www.linkedin.com/pub/arvind-rk/92/621/344" class="icon-linkedin">&nbsp;&nbsp;LinkedIn</a></li>
								</ul>
							</li>
							
						</ul>
					</div><!-- /dl-menuwrapper -->
	</div>	

			
	  <!-- intro area -->	  
	  <div id="intro">
	  
			<div class="intro-text">
				<div class="container">
					<div class="row">
						<div class="col-md-12">
							<div class="brand">
							<br><br><br><br><br><br>
							<h1><a href="#intro" class="wow flipInX" data-wow-delay="0.1s">Arvind RK</a></h1>
							<div class="line-spacer"></div>
							<p><span class="wow flipInX" data-wow-delay="0.4s">Interactive Résumé</span></p>
						</div>
					</div>
					</div>
				</div>
		 	</div>
			
	 </div>
	  

	  <!-- About -->
	  <section id="about" class="home-section bg-white">
	  <div class="callout">
		<div class="container">
			  <div class="row">
				  <div class="col-md-offset-2 col-md-8">
					<div class="section-heading"><h2 class="abcd">Profile</h2></div>
				  </div>
			  </div>
			  <h5>"All who wander are not lost."</h5>
			  
			  <h5>-JRR Tolkien</h5>
			  <hr>
			  <div class="row">
                <div class="col-xs-10 col-sm-4 col-md-4 col-lg-3 col-lg-offset-1">
					<div class="wow fadeInUp" data-wow-delay="0.3s">
                    
                    <div class="panel panel-default">
  						<div class="panel-body bck">
    						<h4 class="abcd">About me</h4>
                    		<p class="l">I am an undergrad in my Junior year pursuing Bachelor's degree in Computer Science and Engineering at SVCE, Chennai. I love spending time on programming algorithms. Coding is my strong suit. Also I am a team player, I like working as a team.</p>
  						</div>
					</div>
                    
					</div>
                </div>
                <div class="col-xs-10 col-sm-4 col-md-4 col-lg-3 col-lg-offset-1" data-wow-delay="0.5s">
					<div class="wow fadeInUp">
                    <img src="img/me.png" alt="" class="img-circle img-responsive" width="246" height="246">
                    </div>
                </div>
                <div class="col-xs-10 col-sm-4 col-md-4 col-lg-3 col-lg-offset-1" data-wow-delay="0.8s">
					<div class="wow fadeInUp">
                    

                    <div class="panel panel-default">
  						<div class="panel-body allign-left bck">
    						<h4 class="abcd">Details</h4>
                    		<h6 class="l">Name : </h6>
                    		<p class="l bn">Arvind Rk</p>
                    		<h6 class="l">Age : </h6>
                    		<p class="l bn">20</p>
                    		<h6 class="l">Location : </h6>
                    		<p class="l bn">Chennai, India</p>
                    		<div class="row">
                    			<ul class="social-network">
                    				Connect :
                    				<br>
									<li><a href="https://www.facebook.com/ArvindRk"><i class="fa fa-facebook fa-fw"></i></a></li>
									<li><a href="https://twitter.com/Arvind_rko"><i class="fa fa-twitter fa-fw"></i></a></li>
									<li><a href="https://gist.github.com/arvindrk"><i class="fa fa-github fa-fw"></i></a></li>
									<li><a href="https://www.linkedin.com/pub/arvind-rk/92/621/344"><i class="fa fa-linkedin fa-fw"></i></a></li>
								</ul>
                    		</div>
  						</div>
					</div>
                    
					</div>
                </div>
               </div>			  
		  </div>	  
		  <br><br><br><br><br><br><br><br><br><br><br><br>
		  </div>
	  </section>
	  
	  <!-- Services -->
	 <section id="services" class="home-section bg-white">
	 <div class="calloutt">
		<div class="container bck">
			  <div class="row">
				  <div class="col-md-offset-2 col-md-8">
					<div class="section-heading">
					 <h2 class="abcd">Experiences</h2>
					 <h6>“Protons give an atom its identity, electrons its personality”<br>- Bill Bryson</h6>
					</div>
				  </div>
			  </div>
			  <hr>
			  <div class="row">
                <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">
					<div>
						<h3 class="abcd l">Educations</h3>
						<h6 class="l wow fadeInUp" data-wow-delay="0.4s">Sri Venkateswara College of Engineering</h6>
						<p class="l wow fadeInUp" data-wow-delay="0.4s">2012 - Present</p>
					</div>
                </div>
                <div class="col-xs-12 col-sm-8 col-md-8 col-lg-8 abc">
					<div>
						<br><br>
						<h6 class="l wow fadeInUp" data-wow-delay="0.4s">Bachelor's - Computer Science and Engineering</h6>
						<p class="l wow fadeInUp" data-wow-delay="0.4s">The education is mainly C/C++ -based programming, but I also am learning about SQL, PHP, Ruby, Haskell and more. During my time in college, I specialized in programming algorithms. Here I learn about Computer Hardware -the importance of OOP-, web- and user experience and design.</p>
					</div>
                </div>
                <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">
					<div>
						<h6 class="l wow fadeInUp" data-wow-delay="0.5s">The PSBB Millennuim School</h6>
						<p class="l wow fadeInUp" data-wow-delay="0.5s">2008 - 2012</p>
					</div>
                </div>
                <div class="col-xs-12 col-sm-8 col-md-8 col-lg-8">
					<div>
						
						<h6 class="l wow fadeInUp" data-wow-delay="0.5s">High School - Computer Stream</h6>
						<p class="l wow fadeInUp" data-wow-delay="0.5s">I graduated highschool, where I enjoyed doing computer science and math. I realized in my third year of school that computer programming started to interest me a lot, and so I started working on my coding skills by practicing and participating in various online events.</p>
						
					</div>
                </div>
			  </div>
			  <hr>
			  <div class="row">
                <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">
					<div>
						<h3 class="abcd l">Internships</h3>
						<h6 class="l wow fadeInUp" data-wow-delay="0.7s">ImplementHIT</h6>
						<p class="l wow fadeInUp" data-wow-delay="0.7s">June 2014</p>
					</div>
                </div>
                <div class="col-xs-12 col-sm-8 col-md-8 col-lg-8 abc">
					<div>
						<br><br>
						<h6 class="l wow fadeInUp" data-wow-delay="0.7s">Web Designing using Bootstrap</h6>
						<p class="l wow fadeInUp" data-wow-delay="0.7s">Interning at ImplementHIT was a valuable and at the same time a joyful experience. As an Intern my job was to create a landing page using a web development tool called Bootstrap for a product called <b>Course Deck</b>.</p>
					</div>
                </div>
                <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">
					<div>
						<h6 class="l wow fadeInUp" data-wow-delay="0.9s">Indian Institute of Technology, Madras</h6>
						<p class="l wow fadeInUp" data-wow-delay="0.9s">June 2014</p>
					</div>
                </div>
                <div class="col-xs-12 col-sm-8 col-md-8 col-lg-8">
					<div>
						<h6 class="l wow fadeInUp" data-wow-delay="0.9s">Android Application Development</h6>
						<p class="l wow fadeInUp" data-wow-delay="0.9s">Myself and my friends teamed along with the IIT'ians to design and develop various Android Applications and Web based applications to help the residents of Chennai navigate better around the city. 5 applications were designed out of which 3 were android applications which aimed at reducing the difficulties of public transportations and 2 were web based applications which were used to moniter the applications.</p>
					</div>
                </div>
			  </div>
			  <hr>
			  <div class="row">
                <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">
					<div>
						<h3 class="abcd l">Projects</h3>
						<h6 class="l wow fadeInUp" data-wow-delay="0.5s">NASA - Mars Rover Project</h6>
						<p class="l wow fadeInUp" data-wow-delay="0.5s">April 2011</p>
					</div>
                </div>
                <div class="col-xs-12 col-sm-8 col-md-8 col-lg-8 abc">
					<div>
						<br><br>
						<h6 class="l wow fadeInUp" data-wow-delay="0.5s">Junior Space School Graduate</h6>
						<p class="l wow fadeInUp" data-wow-delay="0.5s">The Space school graduate program is a 3 week course where we as students get the opportunity to interact with Real life Astronauts and are supposed to build a prototype of a <b>Mars Rover</b> that will be tested on various tough terrains. Design and build a Mars Exploration Rover that reads IR Spectroscopy of various rocks to identify its type. I lead a team of 4 members which was awarded overall Runners up position.</p>
					</div>
                </div>
			  </div>
		</div>
		</div>
	</section>
	
	 <!-- Works -->
	<section id="works" class="home-section bg-gray">
	<div class="callouttt">
		<div class="container">
		  <div class="row">
			  <div class="col-md-offset-2 col-md-8">
				<div class="section-heading">
				 <h2 class="abcd">Interests</h2>
				 <h6>“You can do anything you set your mind to.”<br>- Benjamin Franklin</h6>
				</div>
			  </div>
		  </div>
		  <hr>
		  <div class="container">
	
			<div class="col-xs-12 col-sm-12 col-md-5 col-lg-5 col-md-offset-1 col-lg=offset-1 wow fadeInUp" data-wow-delay="0.5s">
				<div class="thumbnail">
					<img src="img/algorithms.png" alt="">
					<div class="caption text-center">
						<h3>Algorithms</h3>
						<p>I love solving riddles, problems and building stuff from scratch. My strong suit is that I don't give up without a fight. When trying to find the solution to a problem, I will not quit until I find at least one. The satisfaction I get from solving a problem can really make my day.</p>
					</div>
				</div>
			</div>
			<div class="col-xs-12 col-sm-12 col-md-5 col-lg-5 wow fadeInUp" data-wow-delay="0.5s">
				<div class="thumbnail">
					<img src="img/music.png" alt="">
					<div class="caption text-center">
						<h3>Music</h3>
						<p>I can literally listen to music all day. I have a varied taste of music and I listen to it at work, whenever I code and sometime even when I am studying... My favourite genre is house music, I just love to keep my bass at a maximum and listen to the beats really kick in.</p>
					</div> 
				</div>
			</div>
			<div class="col-xs-12 col-sm-12 col-md-5 col-lg-5 col-md-offset-1 col-lg=offset-1 wow fadeInUp" data-wow-delay="0.5s">
				<div class="thumbnail">
					<img src="img/travel.png" alt="">
					<div class="caption text-center">
						<h3>Travel</h3>
						<p>I am an adventurous person who has a desire to travel around the world and meet new people and learn new culture and I just love to <b>PARTY!</b></p>
					</div>
				</div>
			</div>
			<div class="col-xs-12 col-sm-12 col-md-5 col-lg-5 wow fadeInUp" data-wow-delay="0.5s">
				<div class="thumbnail">
					<img src="img/dogs.png" alt="" height="220" width="235">
					<div class="caption text-center">
						<h3>Pets</h3>
						<p>I love dogs and I have a dog named Dexter. He is just 6 months old and he is the most energetic dog I have ever seen.</p>
					</div>
				</div>
			</div>

		</div>
		</div>
		</div>
	</section>	  
	
	  <!-- Abilities -->
	 <section id="abilities" class="home-section bg-white">
	 <div class="callout3">
		<div class="container bck">
			  <div class="row">
				  <div class="col-md-offset-2 col-md-8">
					<div class="section-heading">
					 <h2 class="abcd">Ablities</h2>
					 <h6>“Life without knowledge is death in disguise.”<br>- Talib Kweli</h6>
					</div>
				  </div>
			  </div>
			  <hr>
		<h3 class="abcd l">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Skills</h3>			  
			  <div class="row">

		
	<div class="col-md-6 asdfg">
		<ul class="no-bullets">
		
			<li>
				<span class="ability-title wow fadeInUpUp" data-wow-delay="0.5s">HTML5</span>
				<span class="ability-score">
				
					<span class="glyphicon glyphicon-star filled"></span>
					
					<span class="glyphicon glyphicon-star filled"></span>
					
					<span class="glyphicon glyphicon-star filled"></span>
					
					<span class="glyphicon glyphicon-star filled"></span>
					
					<span class="glyphicon glyphicon-star filled"></span>
						
				</span>
			</li>

			<li>
				<span class="ability-title wow fadeInUpUp" data-wow-delay="0.6s">MySQL</span>
				<span class="ability-score">
				
					<span class="glyphicon glyphicon-star filled"></span>
					
					<span class="glyphicon glyphicon-star filled"></span>
					
					<span class="glyphicon glyphicon-star filled"></span>
					
					<span class="glyphicon glyphicon-star filled"></span>
					
					<span class="glyphicon glyphicon-star filled"></span>
						
				</span>
			</li>	
			<li>
				<span class="ability-title wow fadeInUp" data-wow-delay="0.8s">Java</span>
				<span class="ability-score">
				
					<span class="glyphicon glyphicon-star filled"></span>
					
					<span class="glyphicon glyphicon-star filled"></span>
					
					<span class="glyphicon glyphicon-star filled"></span>
					
					<span class="glyphicon glyphicon-star filled"></span>
					
					<span class="glyphicon glyphicon-star "></span>
						
				</span>
			</li>
			
					
			<li>
				<span class="ability-title wow fadeInUp" data-wow-delay="1.1s">Bootstrap 2/3</span>
				<span class="ability-score">
				
					<span class="glyphicon glyphicon-star filled"></span>
					
					<span class="glyphicon glyphicon-star filled"></span>
					
					<span class="glyphicon glyphicon-star filled"></span>
					
					<span class="glyphicon glyphicon-star filled"></span>
					
					<span class="glyphicon glyphicon-star "></span>
						
				</span>
			</li>
			
			<li>
				<span class="ability-title wow fadeInUp" data-wow-delay="1.4s">CSS</span>
				<span class="ability-score">
				
					<span class="glyphicon glyphicon-star filled"></span>
					
					<span class="glyphicon glyphicon-star filled"></span>
					
					<span class="glyphicon glyphicon-star filled"></span>
					
					<span class="glyphicon glyphicon-star "></span>
					
					<span class="glyphicon glyphicon-star "></span>
						
				</span>
			</li>
			
			<li>
				<span class="ability-title wow fadeInUp" data-wow-delay="1.7s">PHP</span>
				<span class="ability-score">
				
					<span class="glyphicon glyphicon-star filled"></span>
					
					<span class="glyphicon glyphicon-star filled"></span>
					
					<span class="glyphicon glyphicon-star filled"></span>
					
					<span class="glyphicon glyphicon-star "></span>
					
					<span class="glyphicon glyphicon-star "></span>
						
				</span>
			</li>
				
			<li>
				<span class="ability-title wow fadeInUp" data-wow-delay="2s">Javascript</span>
				<span class="ability-score">
				
					<span class="glyphicon glyphicon-star filled"></span>
					
					<span class="glyphicon glyphicon-star "></span>
					
					<span class="glyphicon glyphicon-star "></span>
					
					<span class="glyphicon glyphicon-star "></span>
					
					<span class="glyphicon glyphicon-star "></span>
						
				</span>
			</li>

		</ul>
	</div>
	<div class="col-md-6">
		<ul class="no-bullets">
			
			<li>
				<span class="ability-title wow fadeInUp" data-wow-delay="0.5s">C/C++</span>
				<span class="ability-score">
				
					<span class="glyphicon glyphicon-star filled"></span>
					
					<span class="glyphicon glyphicon-star filled"></span>
					
					<span class="glyphicon glyphicon-star filled"></span>
					
					<span class="glyphicon glyphicon-star filled"></span>
					
					<span class="glyphicon glyphicon-star filled"></span>
						
				</span>
			</li>
			<li>
				<span class="ability-title wow fadeInUp" data-wow-delay="0.8s">Haskell</span>
				<span class="ability-score">
				
					<span class="glyphicon glyphicon-star filled"></span>
					
					<span class="glyphicon glyphicon-star filled"></span>
					
					<span class="glyphicon glyphicon-star filled"></span>
					
					<span class="glyphicon glyphicon-star filled"></span>
					
					<span class="glyphicon glyphicon-star "></span>
						
				</span>
			</li>
			<li>
				<span class="ability-title wow fadeInUp" data-wow-delay="1.1s">Object Orientated Programming</span>
				<span class="ability-score">
				
					<span class="glyphicon glyphicon-star filled"></span>
					
					<span class="glyphicon glyphicon-star filled"></span>
					
					<span class="glyphicon glyphicon-star filled"></span>
					
					<span class="glyphicon glyphicon-star filled"></span>
					
					<span class="glyphicon glyphicon-star "></span>
						
				</span>
			</li>
			<li>
				<span class="ability-title wow fadeInUp" data-wow-delay="1.4s">Wordpress</span>
				<span class="ability-score">
				
					<span class="glyphicon glyphicon-star filled"></span>
					
					<span class="glyphicon glyphicon-star filled"></span>
					
					<span class="glyphicon glyphicon-star filled"></span>
					
					<span class="glyphicon glyphicon-star filled"></span>
					
					<span class="glyphicon glyphicon-star "></span>
						
				</span>
			</li>

			<li>
				<span class="ability-title wow fadeInUp" data-wow-delay="1.7s">Visual Basic</span>
				<span class="ability-score">
				
					<span class="glyphicon glyphicon-star filled"></span>
					
					<span class="glyphicon glyphicon-star filled"></span>
					
					<span class="glyphicon glyphicon-star filled"></span>
					
					<span class="glyphicon glyphicon-star "></span>
					
					<span class="glyphicon glyphicon-star "></span>
						
				</span>
			</li>
			
			<li>
				<span class="ability-title wow fadeInUp" data-wow-delay="2s">Ruby</span>
				<span class="ability-score">
				
					<span class="glyphicon glyphicon-star filled"></span>
					
					<span class="glyphicon glyphicon-star "></span>
					
					<span class="glyphicon glyphicon-star "></span>
					
					<span class="glyphicon glyphicon-star "></span>
					
					<span class="glyphicon glyphicon-star "></span>
						
				</span>
			</li>
			

				
		</ul>
	</div>
	
		
</div>
<hr>
		<h3 class="abcd l">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Tools</h3>
		<div class="row">
		
	<div class="col-md-6">
		<ul class="no-bullets">
		
				<li>
				<span class="ability-title wow fadeInUp" data-wow-delay="0.2s">Windows (10+ years)</span>
				<span class="ability-score">
				
					<span class="glyphicon glyphicon-star filled"></span>
					
					<span class="glyphicon glyphicon-star filled"></span>
					
					<span class="glyphicon glyphicon-star filled"></span>
					
					<span class="glyphicon glyphicon-star filled"></span>
					
					<span class="glyphicon glyphicon-star filled"></span>
						
				</span>
			</li>
			
			<li>
				<span class="ability-title wow fadeInUp" data-wow-delay="0.5s">MS Office (7+ years)</span>
				<span class="ability-score">
				
					<span class="glyphicon glyphicon-star filled"></span>
					
					<span class="glyphicon glyphicon-star filled"></span>
					
					<span class="glyphicon glyphicon-star filled"></span>
					
					<span class="glyphicon glyphicon-star filled"></span>
					
					<span class="glyphicon glyphicon-star filled"></span>
						
				</span>
			</li>
				
			<li>
				<span class="ability-title wow fadeInUp" data-wow-delay="0.8s">Firefox (4 years)</span>
				<span class="ability-score">
				
					<span class="glyphicon glyphicon-star filled"></span>
					
					<span class="glyphicon glyphicon-star filled"></span>
					
					<span class="glyphicon glyphicon-star filled"></span>
					
					<span class="glyphicon glyphicon-star filled"></span>
					
					<span class="glyphicon glyphicon-star "></span>
						
				</span>
			</li>
			

			<li>
				<span class="ability-title wow fadeInUp" data-wow-delay="1.1s">Notepad++ (1 years)</span>
				<span class="ability-score">
				
					<span class="glyphicon glyphicon-star filled"></span>
					
					<span class="glyphicon glyphicon-star filled"></span>
					
					<span class="glyphicon glyphicon-star filled"></span>
					
					<span class="glyphicon glyphicon-star filled"></span>
					
					<span class="glyphicon glyphicon-star "></span>
						
				</span>
			</li>
			

		</ul>
	</div>
	<div class="col-md-6">
		<ul class="no-bullets">
							
			<li>
				<span class="ability-title wow fadeInUp" data-wow-delay="1.4s">Macintosh (4 years)</span>
				<span class="ability-score">
				
					<span class="glyphicon glyphicon-star filled"></span>
					
					<span class="glyphicon glyphicon-star filled"></span>
					
					<span class="glyphicon glyphicon-star filled"></span>
					
					<span class="glyphicon glyphicon-star filled"></span>
					
					<span class="glyphicon glyphicon-star filled"></span>
						
				</span>
			</li>
			<li>
				<span class="ability-title wow fadeInUp" data-wow-delay="1.7s">Sublime Text (1 years)</span>
				<span class="ability-score">
				
					<span class="glyphicon glyphicon-star filled"></span>
					
					<span class="glyphicon glyphicon-star filled"></span>
					
					<span class="glyphicon glyphicon-star filled"></span>
					
					<span class="glyphicon glyphicon-star filled"></span>
					
					<span class="glyphicon glyphicon-star filled"></span>
						
				</span>
			</li>
			
							
			<li>
				<span class="ability-title wow fadeInUp" data-wow-delay="2s">Linux (2 years)</span>
				<span class="ability-score">
				
					<span class="glyphicon glyphicon-star filled"></span>
					
					<span class="glyphicon glyphicon-star filled"></span>
					
					<span class="glyphicon glyphicon-star filled"></span>
					
					<span class="glyphicon glyphicon-star filled"></span>
					
					<span class="glyphicon glyphicon-star "></span>
						
				</span>
			</li>
			
					
			<li>
				<span class="ability-title wow fadeInUp" data-wow-delay="2.3s">Internet Explore 6+ (2 years)</span>
				<span class="ability-score">
				
					<span class="glyphicon glyphicon-star filled"></span>
					
					<span class="glyphicon glyphicon-star filled"></span>
					
					<span class="glyphicon glyphicon-star filled"></span>
					
					<span class="glyphicon glyphicon-star filled"></span>
					
					<span class="glyphicon glyphicon-star "></span>
						
				</span>
			</li>
	</ul>
	</div>
	
	</div>
		</div>
		<br><br><br><br><br><br><br>
		</div>
	</section>		
	  
	 <!-- Contact -->
	  <section id="contact" class="home-section bg-black calloutttt">
	  	<div class="container">
			  <div class="row">
				  <div class="col-md-offset-2 col-md-8">
					<div class="section-heading bck">
					 <h2>Get in Touch</h2>
					 <p>Feel free to email me, or drop me a line in Twitter!<br><br>Have comments/feedback for my website? </p>
					</div>
				  </div>
			  </div>

	  		<div class="row">
      			<div class="col-md-offset-1 col-md-10 section-heading bck" id="myDiv">
      				<?php echo'
      				<form class="form-horizontal" role="form" method=POST>
      				  <div class="form-group">
      				 
      					<div class="col-md-offset-2 col-md-4">
      					  <input type="text" class="form-control" id="FName" placeholder="Fisrt Name">
      					</div>
      					<div class="col-md-4">
      					  <input type="text" class="form-control" id="LName" placeholder="Last Name">
      					</div>
      				  </div>
      				  <div class="form-group">
      					<div class="col-md-offset-2 col-md-8">
      					  <input type="email" class="form-control" id="email" placeholder="Email">
      					</div>
      				  </div>
      				  <div class="form-group">
      					<div class="col-md-offset-2 col-md-8">
      					  <input type="text" class="form-control" id="phone" placeholder="Phone Number">
      					</div>
      				  </div>
      				  <div class="form-group">
      					<div class="col-md-offset-2 col-md-8">
      					  <textarea name="message" class="form-control" rows="3" id ="comments" placeholder="Message"></textarea>
      					</div>
      				  </div>
      				  <div class="form-group">
      					<div class="col-md-offset-2 col-md-8">
      					 <button type="button" class="btn btn-theme btn-lg btn-block" onclick="loadXMLDoc()">Send message</button>
      					</div>
      				   </div>
      				</form>';

      				if (isset($_POST["FName"])) {
							$fn = $_POST["FName"];
						}
						if (isset($_POST["LName"])) {
							$n = $_POST["LName"];
						}
						if (isset($_POST["email"])) {
							$e = $_POST["email"];
						}
						if (isset($_POST["phone"])) {
							$p = $_POST["phone"];
						}
						if (isset($_POST["comments"])) {
							$c = $_POST["comments"];
						}
						$subject="Website Suggestions";
						  	$to="rkaphp@gmail.com";
						$message="Form details below\nName : ".$fn." ".$n."\nEmail : ".$e."\nPhone : ".$p."\nMessage : ".$c."\n";
						  	$header="From".$email." Feedback ";
						 	$ret=mail($to,$subject,$message,$header);
      				?>
	  			</div>
	  		</div>
	  		<br><br>
			<div class="row">
				<div class="col-md-offset-2 col-md-8">
					<h5 class="bck">Social Networking connections</h5>
						<div class="col-md-3">
							<a href="https://www.facebook.com/ArvindRk"><i class="icon icon-facebook wow fadeInUp" data-wow-delay="0.5s">acebook</i></a>
						</div>
						<div class="col-md-3">
							<a href="https://twitter.com/Arvind_rko" width="60px" height="60px">Twitter<i class="icon-twitter wow fadeInUp" data-wow-delay="0.5s"></i></a>
						</div>
						<div class="col-md-3">
							<a href="https://gist.github.com/arvindrk">Github<i class="icon icon-github wow fadeInUp" data-wow-delay="0.5s"></i></a>
						</div>
						<div class="col-md-3">
							<a href="https://www.linkedin.com/pub/arvind-rk/92/621/344">Linked<i class="icon icon-linkedin wow fadeInUp" data-wow-delay="0.5s"></i></a>
						</div>
					
				</div>				
			</div>

	  	</div><br><br><br><br><br>
	  </section>  

	<div class="remove"></div>
	 
	 <!-- js -->
    <script src="js/jquery.js"></script>
    <script src="js/bootstrap.min.js"></script>
	<script src="js/jquery.smooth-scroll.min.js"></script>
	<script src="js/jquery.dlmenu.js"></script>
	<script src="js/wow.min.js"></script>
	<script src="js/custom.js"></script>
	<script src="js/jquery.easing.min.js"></script>
    <script src="js/scrolling-nav.js"></script>

    </body>
    <footer>
		<div class="container">
			<div class="row">
				<div class="col-md-12">
					<p class="bnm">Copyright &copy;2014.<br>Webpage designed by <b>Arvind Rk</b>.</a></p>
				</div>
			</div>		
		</div>	
	</footer>
</html>
