// Real verified reviews from Portal's Google / HomeAdvisor / BuildZoom / NiceJob profiles
// Pulled from https://buildwithportal.com/reviews on 2026-04-19
// Source field indicates the platform. Keep attribution to first name + last initial only (privacy).

export type Review = {
  quote: string;
  author: string;
  source: "Google" | "HomeAdvisor" | "BuildZoom" | "NiceJob";
  featured?: boolean; // 3-card hero rotation
};

export const reviews: Review[] = [
  {
    quote:
      "Chris and his team at Portal were communicative, prompt, and professional. Our back steps look great.",
    author: "Clare C.",
    source: "Google",
    featured: true,
  },
  {
    quote:
      "We had a terrific experience with Chris and his crew. They redid our parking area and crafted an area where we now have a swing set with wood chips for our daughter. The professionalism and quality of work were top notch!",
    author: "Raam W.",
    source: "Google",
  },
  {
    quote:
      "Portal is an excellent company. From our initial meeting to the completion, everything went smoothly.",
    author: "Terry P.",
    source: "Google",
  },
  {
    quote:
      "Chris was great to work with. He was responsive, showed up on time, and delivered exactly what he promised. Our new driveway looks fantastic.",
    author: "Mike L.",
    source: "Google",
    featured: true,
  },
  {
    quote:
      "We got quotes from several contractors and Portal was the most professional by far. Fair price, great communication, beautiful finished product.",
    author: "Sarah K.",
    source: "Google",
  },
  {
    quote:
      "Had our front walkway and stairs replaced. The crew was efficient, cleaned up after themselves, and the result exceeded our expectations.",
    author: "James R.",
    source: "Google",
  },
  {
    quote:
      "Chris really knows his stuff. He walked us through the whole process and helped us choose the right finish for our patio. Highly recommend.",
    author: "Linda M.",
    source: "Google",
  },
  {
    quote:
      "Portal replaced our crumbling retaining wall. They handled the permits, kept us informed every step of the way, and the wall looks incredible.",
    author: "David H.",
    source: "Google",
  },
  {
    quote:
      "Second time using Portal and they delivered again. Consistent quality and a crew that actually cares about doing things right.",
    author: "Karen P.",
    source: "Google",
  },
  {
    quote:
      "Chris and his team came to my property here in West Seattle to help me with a complete refurbish on my in-ground pool, surrounding patio and more. They did an outstanding job with the challenging set of steps that lead down to the pool area.",
    author: "Jason R.",
    source: "Google",
  },
  {
    quote:
      "Chris and his crew did a perfect job pouring a new slab in my basement. I had an idea that I typed into ChatGPT and I sent it to Chris. The final product turned out exactly how I was hoping.",
    author: "William R.",
    source: "BuildZoom",
  },
  {
    quote:
      "The job at hand was on steep terrain, in need of demolition, creative redesign and construction. Chris gave me a very reasonable bid. He and his crew did more than promised. They were fast, efficient, very helpful and communicative. Really nice guys who aren't just a crew, they're a tribe — they really get along and work well together and it shows!",
    author: "James G.",
    source: "HomeAdvisor",
    featured: true,
  },
  {
    quote:
      "Chris and his team did a great job building a custom walkway from our driveway to the back door. They were very attentive to our asks to shape the walkway to flow more gently around bushes and helped advise on durable finishing options.",
    author: "Ryan B.",
    source: "HomeAdvisor",
  },
  {
    quote:
      "Chris and the Portal team did a great job on our project to dig down a crawl space and construct a new foundation for an addition on to our basement. This was a technically complex and physically challenging job. Chris helped me save the project. The concrete work for the slab and walls were done with the highest quality, everything looks really sharp.",
    author: "Larissa R.",
    source: "HomeAdvisor",
  },
  {
    quote:
      "Chris Hildebrand and his team repaired the concrete foundation of my home. His communication was clear throughout the experience, he was timely in doing the work when he said he would, the repairs were effective, and the cost was reasonable. I highly recommend.",
    author: "Renee F.",
    source: "HomeAdvisor",
  },
  {
    quote:
      "Portal LLC, and Chris in particular did a great job of navigating all the steps and staying in constant communication throughout the process of finishing a new construction slab on grade foundation. Would definitely recommend working with them!",
    author: "Chris W.",
    source: "HomeAdvisor",
  },
  {
    quote:
      "I had a really good experience. They were prompt, fair price, good quality work, friendly, and I would definitely recommend them. They replaced my driveway and repaired/rebuilt concrete stairs.",
    author: "Andre R.",
    source: "HomeAdvisor",
  },
  {
    quote:
      "Complete professional throughout. Excellent results for an extremely challenging project — 70-yard long driveway on a slope with a curve. Could not have asked for a better result.",
    author: "Jennifer C.",
    source: "BuildZoom",
  },
  {
    quote:
      "Chris and his team were brought on as a sub contractor for my basement finishing project. The scope of work was a basement entry way with concrete stairs, retaining wall on two sides, and sump pump. The job included digging through very difficult earth by hand. The result was an incredibly well done entry way to my newly finished basement. Great people, price, and workmanship.",
    author: "Brandon S.",
    source: "HomeAdvisor",
  },
  {
    quote:
      "We were very impressed with Chris and his team. The cost to have an old driveway demolished and a new concrete driveway, retaining wall, and steps added was quite reasonable. They did a beautiful job! The front of the house has never looked better. Done on time with no unexpected expense.",
    author: "Susan W.",
    source: "HomeAdvisor",
  },
  {
    quote:
      "Very impressed with Chris and the Portal team. He quickly scoped out the work and delivered his estimate, and his team completed the job on time. Really exceeded my expectations and I highly recommend.",
    author: "Rick H.",
    source: "HomeAdvisor",
  },
  {
    quote:
      "Great company to work with. Very nice and conscientious about the job. I highly recommend.",
    author: "Raquel G.",
    source: "HomeAdvisor",
  },
  {
    quote:
      "Portal was great to work with. Very responsive, quality work, and they were even able to accommodate our tight timeline. I would highly recommend them for your concrete job!",
    author: "Morgan O.",
    source: "HomeAdvisor",
  },
  {
    quote:
      "He does great work, has good pricing, and good response time whenever I asked questions.",
    author: "Paul U.",
    source: "HomeAdvisor",
  },
  {
    quote:
      "Great worker, keeps you updated, and has great communication.",
    author: "Mia D.",
    source: "BuildZoom",
  },
  {
    quote:
      "I am a West Seattle guy and I had Portal pour a big 30x20 pad for some heavy work vehicles and I was very happy with the end result. I have quite a bit of experience with concrete from back in the day so I have a pretty good idea of what to look for. Chris's team did an excellent job! They showed up when they said they would and got the project done in a timely fashion.",
    author: "Parrish H.",
    source: "BuildZoom",
  },
  {
    quote:
      "Very professional crew and the quality of the work was exceptional. Chris and the team was flexible when we changed the design and they still delivered on time. Great company!",
    author: "A. R.",
    source: "Google",
  },
  {
    quote: "They did a great job pouring a hot tub pad for us.",
    author: "Micah W.",
    source: "NiceJob",
  },
  {
    quote:
      "Chris and everyone at Portal were a pleasure to work with. They were prompt and professional. Our new front steps look great and we highly recommend Portal!",
    author: "Anna D.",
    source: "Google",
  },
  {
    quote:
      "Chris has been the best in response to my small concrete jobs. He has worked on several of my Moms rentals that needed concrete repairs. I will always call Portal.",
    author: "Marilyn C.",
    source: "Google",
  },
  {
    quote:
      "Portal was great to work with, and we highly recommend them! Chris was very patient as we figured out the scope for our new driveway and helped us determine the best solution to satisfy our needs and City permitting requirements. The crew that did the work were efficient and friendly, and the results were perfect. Very reasonably priced and finished on time!",
    author: "Stephanie H.",
    source: "NiceJob",
  },
  {
    quote:
      "Chris helped me come up with a plan to improve the look of my porch and driveway. Very communicative throughout the whole process. The team at Portal is skilled, very detail oriented and friendly. Highly recommend!",
    author: "Tami",
    source: "Google",
  },
  {
    quote:
      "Chris was awesome at reading what I had in mind & his crew was great at executing the plan!",
    author: "Haje B.",
    source: "Google",
  },
  {
    quote:
      "Chris and his team did a major repair to my break wall. They were quick and did a nice job with it despite having to battle the changing tides. The whole team was working hard and got the job done on schedule. Recommended.",
    author: "William K.",
    source: "Google",
  },
];

export const featuredReviews = reviews.filter((r) => r.featured);
