
//
//  Resume.swift
//
//  Created by Andrew Apperley on 2017-01-19.
//  Copyright © 2017 Andrew Apperley All rights reserved.
//

class AndrewApperley: Human, Husband, IOSDevelopment, BackendDevelopment, ApplicationArchitecture, TeamLead {

  var _summary: String
  var _education: Dictionary<String, String>
  var _career = Array<Dictionary<String, Any>>
  var _interests = Array<String>
  var _recommendations = Array<Dictionary<String, String>>
  
  init() {
    super.init()
    _summary = summary()
    _education = education()
    _career = career()
    _interests = interests()
    _notableProjects = notableProjects()
    _recommendations = recommendations()
  }
  
  func summary() -> String {
    return
     " I'm an experienced Full Stack Software Developer that has a passion for writing well architected, " +
     " elegantly implemented, and scalable code across the entire stack though I primarily focus on mobile. " +
     " I'm well versed in Native iOS development using Swift and Objective-C, as well as Javascript on the frontend and backend."
  }
  
  func education() -> Dictionary<String, String> {
    return [
      "type": "College",
      "name": "Humber College",
      "timeframe": "2010 - 2012",
      "program": "Multimedia Design and Production Technician"
    ]
  }
  
  func career() -> Array<Dictionary<String, Any>> {
    return [
      [
        "role": "Mobile Developer".
        "company": "Shopify",
        "timeframe": "December 2016 - Present"
      ],
      
      [
        "role": "Part Time Instructor".
        "company": "Humber College",
        "timeframe": "September 2016 - December (4 months)"
      ],
      
      [
        "role": "Senior iOS Applications Developer".
        "company": "Tiny Hearts",
        "timeframe": "June 2016 - December 2016 (7 months)"
      ],
      
      [
        "role": "Senior Server Developer".
        "company": "Quiver Media Inc.",
        "timeframe": "October 2015 - June 2016 (9 months)"
      ],
      
      [
        "role": "Full Stack Developer".
        "company": "Publicis",
        "timeframe": "January 2015 - October 2015 (9 months)"
      ],
       
      [
        "role": "Application Developer".
        "company": "BitBlitz Apps Inc.",
        "timeframe": "April 2014 - December 2014 (9 months)"
      ],
      
      [
        "role": "Interactive Developer".
        "company": "Digiflare",
        "timeframe": "September 2013 - April 2014 (8 months)"
      ],
      
      [
        "role": "Junior Flash/iOS Developer".
        "company": "DesignAxiom Ltd.",
        "timeframe": "December 2011 - April 2013 (1 year 5 months)"
      ]
    ]
  }
  
  func interests() -> Array<String> {
    return [
      "My Wife",
      "Artisan Coffee",
      "Frank & Oak",
      "Biking",
      "The Walking Dead (Comics, Novels, and TV Show)",
      "Back Country Camping",
      "Development"
    ]
  }
  
  func recommendations() -> Array<Dictionary<String, String>> {
    return [
      [
        "name": "Chris W. Rea",
        "content": "Andrew is a pleasure to work with, and a true professional and great teammate. " +
                   "I joined a team late in the development cycle, having to ramp up quickly. Andrew offered " +
                   "clear, expert answers to my questions, quickly establishing himself as a go-to person on my list. " +
                   "Andrew's patience, guidance, and review of proposed changes were invaluable, improving the end " +
                   "product considerably. Andrew's knowledge of development tools and technologies is broad and deep -- he is " +
                   "the real full stack developer, adept whether working on a mobile app front-end or back-end server API. " +
                   "It would be a privilege to work with Andrew again. Hire him."
      ]
    ]
  }
}
