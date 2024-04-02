import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.scss'],
})
export class CareerComponent implements OnInit {
  private router: Router = inject(Router);
  private route: ActivatedRoute = inject(ActivatedRoute);

  public jobs = [
    {
      id: 'uiuxdesigner',
      title: 'Mobile UI/UX Designer – The Experience Wizard',
      text: "🚀 About Us:\n\nWe're not just another startup; we're the rocket fuel propelling the mobile universe to new heights! Backed by 4 international visionary VCs and a multitude of European and US-based angel investors/founders with experience in creating apps, our startup is led by two serial founders whose apps have reached the fingertips of over 2 billion users in the last decade!\n\nOur team is a tight-knit crew of dreamers, doers, dog lovers (and cat enthusiasts), aggressively expanding the boundaries of what's possible in the mobile space. Joining us means getting in on the ground floor of a scaling startup that's all about innovation, not corporate stagnation. Here, your work speaks louder than words. This job will be hard if you’re looking for a “job”. It will be fabulously rewarding if your calling is UI/UX and you want to create for millions of active users worldwide \n\n🔮 The Role:\n\nThis is a REAL UI/UX MOBILE Role: You’ll be doing UX Research, UX/UI Design, UX Copywriting and everything in between! You’ll be focusing on Mobile only!\n\nAs our Mobile UI/UX Designer, or as we prefer, \"The Experience Wizard,\" you’re not just creating designs; you’re crafting entire user journeys that feel intuitive and magical on both iOS and Android platforms. Understanding the distinct design patterns and user expectations for each platform is crucial, as we dedicate ourselves to building uniquely optimized experiences for both. You'll wield your comprehensive design skills to not only enchant users but to ensure our app feels like home, whether it’s accessed from an iPhone or an Android device. Working directly with the founders, you’re at the heart of our mission, weaving together form and function to redefine mobile interaction.\n\n💥 What You'll Do:\n\nDesign captivating low fidelity, high fidelity feature prototypes after facilitating Design Sprints for the entire team!\nCreate the final UI/UX for both iOS and Android, ensuring our app not only dazzles but feels perfectly at home on both platforms.\nYou’ll design interactions/animations (not only screens! You create experiences!)\nBecome a champion of the Design Sprint methodology, spearheading our efforts to turn bright ideas into tangible solutions that resonate distinctly with iOS and Android users.\nConduct deep-dive user interviews and translate insights into actionable platform-specific design strategies.\nWork closely with founders and a brilliant team, infusing every design decision with your deep understanding of platform-specific user expectations.\nLive and breathe our results-driven culture, where the impact of your platform-specific designs speaks louder than words.\n\n🌟 Who You Are:\n\nA masterful Experience Wizard with 5+ years in the mobile design realm, boasting a portfolio that showcases exceptional iOS and Android design solutions.\nDeeply knowledgeable about iOS and Android design patterns, understanding that the devil (and the magic) is in the details that differentiate the two.\nWe often talk to our users so you need to be a savvy interviewer with the ability to glean user insights that inform distinct, platform-optimized designs. \nA true believer in results and a practitioner of our ethos: creating impact through action, especially in a startup environment where every pixel counts.\nEager to work closely with founders, ready to leave a significant mark on the product with your platform-specific design expertise.\n\n🎉 Why Join Us?\n\nWe have dope benefits: cool office, free massage, gym membership, healthcare benefits, etc. But don’t join us for the benefits. Join because we are the type of team that’s willing to work their ass off and build something huge, with a global impact. \nYou can work alongside our founders, shaping a product that feels intimately familiar yet refreshingly innovative on both iOS and Android.\nSeize the rare opportunity to join a startup in its ascent, where your design choices literally influence millions of users worldwide\nRevel in an anti-corporate environment where creativity is unleashed, and results for each platform are what truly measure success.\n",
      active: false,
    },
    {
      id: 'androiddev',
      title: 'Senior Android Developer – Architect of Meaningful Engagement',
      text: '🚀 About Us:\nJoin us on a meaningful journey where technology and values converge. Our mission is to create apps that not only enlighten and educate but also resonate with the values of our community. With founders who have a history of impacting over 2 billion lives worldwide in the last decade, we’re embarking on our next chapter to infuse everyday digital experiences with a sense of purpose. As we grow, we’re seeking a Senior Android Developer to help us develop an app that combines robust technology with values-driven content.\n\n🛠 The Role:\nAs our Senior Android Developer, the "Architect of Meaningful Engagement," you’ll be a cornerstone in building our Android app natively with Java and Kotlin. With over 5 years of crafting digital experiences, you bring a wealth of knowledge and a heart for making a difference. Your expertise will not only push the boundaries of what Android apps can achieve but also ensure that our offerings carry a touch of inspiration and connection to values that matter.\n\n💡 What You\'ll Do:\nLead the charge in developing our Android application with a mastery of Java and Kotlin, creating an app that’s both technically advanced and meaningful.\nArchitect and implement high-quality code that is efficient, maintainable, and follows both technical and ethical best practices.\nWork collaboratively with cross-functional teams to bring new features to life, ensuring they align with our mission and enhance our community’s experience.\nIntegrate a variety of SDKs (such as Firebase, Facebook, Adjust, Amplitude) to extend functionality and improve overall app performance, all while ensuring these integrations respect our users’ values and privacy.\nUphold Android’s design principles and interface guidelines, delivering an app that’s not only intuitive and engaging but also reflective of our community\'s values.\n\n🌟 Who You Are:\nA dedicated Android developer with 5+ years of experience in native app development, skilled in Java and Kotlin.\nPassionate about leveraging technology to create meaningful, value-driven user experiences.\nExperienced with Android SDK, third-party libraries, and APIs, understanding how to weave these into a seamless and impactful app experience.\nA champion of Android design principles and interface guidelines, with a commitment to crafting applications that offer excellent usability and reflect our mission.\nCollaborative, thoughtful, and mission-driven, ready to contribute to a team that’s making a tangible difference through technology.\n\n\n\n🎉 Why Join Us?\n\nWe have dope benefits: cool office, free massage, gym membership, healthcare benefits, etc. But don’t join us for the benefits. Join because we are the type of team that’s willing to work their ass off and build something huge, with a global impact. \nYou can work alongside our founders, shaping a product that feels intimately familiar yet refreshingly innovative on both iOS and Android.\nSeize the rare opportunity to join a startup in its ascent, where your design choices literally influence millions of users worldwide\nRevel in an anti-corporate environment where creativity is unleashed, and results for each platform are what truly measure success.\n',
      active: false,
    },
    {
      id: 'iosdev',
      title: 'IOS Developer – The Divine Coder',
      text: "🚀 About Us:\nWelcome aboard the journey of enlightenment and digital innovation with Bible Chat, where our mission is to bridge centuries of wisdom with today's technology. Our vessel is fueled by faith and guided by founders whose vision has touched the lives of over 2 billion people across the globe in the last decade. As we navigate the vast digital landscape, our crew of devoted developers, inspired designers, and compassionate community managers invites you to join us in our quest. In our B2C startup, your work directly enhances the daily spiritual journey of our users, making the sacred scriptures more accessible and engaging.\n\n🙏 The Role:\nAs our iOS Developer, affectionately known as \"The Divine Coder,\" your mission will be to contribute to the iOS experience of BibleChat. Whether you're a junior developer with a year of grace or a senior developer with a wealth of experience, your passion for creating soulful mobile experiences will lead the way. You'll play a crucial role in directly connecting with our community, ensuring that every feature developed enriches their growth and engagement with the app.\n\n💡 What You'll Do:\n\nUtilize your proficiency in SwiftUI to develop features that inspire and engage our app's community of believers.\nIntegrate various SDKs (such as Adjust, Amplitude, Firebase, Facebook, etc.) to enhance the app's functionality and user experience, always mindful of our mission and values.\nCollaborate with a team of like-minded individuals to create solutions that seamlessly blend user needs with intuitive interfaces.\nAdhere to the design guidelines of iOS, ensuring our app not only functions divinely but also harmonizes with the aesthetics and standards of the Apple ecosystem.\nShare your knowledge and insights with the team, contributing to an environment of mutual growth and understanding.\n\n🌟 Who You Are:\nA faithful developer with at least 1 year of experience in iOS development (could be 10 also!), particularly skilled in SwiftUI.\nPassionate about developing mobile apps that have a meaningful impact on the lives of users.\nExperienced in integrating various SDKs to expand app capabilities and enhance the user journey.\nCommitted to crafting apps that adhere to iOS design guidelines, ensuring a seamless and respectful user experience within the Apple ecosystem.\nEager to contribute to a startup environment where your work directly influences the spiritual journey of millions worldwide.\n\n\n\n🎉 Why Join Us?\n\nWe have dope benefits: cool office, free massage, gym membership, healthcare benefits, etc. But don’t join us for the benefits. Join because we are the type of team that’s willing to work their ass off and build something huge, with a global impact. \nYou can work alongside our founders, shaping a product that feels intimately familiar yet refreshingly innovative on both iOS and Android.\nSeize the rare opportunity to join a startup in its ascent, where your design choices literally influence millions of users worldwide\nRevel in an anti-corporate environment where creativity is unleashed, and results for each platform are what truly measure success.",
      active: false,
    },
  ];

  async ngOnInit() {
    if (this.route.snapshot.fragment) {
      this.jobs.forEach((job, i) => {
        if (job.id === this.route.snapshot.fragment) {
          this.makeActive(i);
        }
      });
    } else {
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    }

    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        if (event.url.split('#')[1]) {
          this.jobs.forEach((job, i) => {
            if (job.id === event.url.split('#')[1]) {
              this.makeActive(i);
            }
          });
        } else {
          window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth',
          });
        }
      });
  }

  makeActive(index: number) {
    for (const [i, job] of this.jobs.entries()) {
      if (i != index) {
        job.active = false;
      }
    }

    this.jobs[index].active = !this.jobs[index].active;
  }
}
