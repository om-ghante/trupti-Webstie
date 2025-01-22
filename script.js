document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.getElementById("navbar")
    const navLinks = document.querySelector(".nav-links")
    const burger = document.querySelector(".burger")
    const links = document.querySelectorAll(".nav-links li")

    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault()
        document.querySelector(this.getAttribute("href")).scrollIntoView({
          behavior: "smooth",
        })
      })
    })

    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        navbar.style.backgroundColor = "rgba(26, 95, 122, 0.9)"
      } else {
        navbar.style.backgroundColor = "#1A5F7A"
      }
    })
  
    burger.addEventListener("click", () => {
      navLinks.classList.toggle("nav-active")
      burger.classList.toggle("toggle")
  
      links.forEach((link, index) => {
        if (link.style.animation) {
          link.style.animation = ""
        } else {
          link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`
        }
      })
    })
  
    const contactForm = document.getElementById("contact-form")
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault()
      alert("Thank you for your message! We will get back to you soon.")
      contactForm.reset()
    })
  })
  
  