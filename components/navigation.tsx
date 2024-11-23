"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Building2 } from "lucide-react";
import { useEffect } from "react";
import Script from "next/script";

export function Navigation() {
  const pathname = usePathname();

  useEffect(() => {
    const initializeNavigation = () => {
      const $ = window.jQuery;
      if (!$) return;

      const $openOverlay = $('.open-overlay');
      const $overlayNavigation = $('.overlay-navigation');
      const $topBar = $('.bar-top');
      const $middleBar = $('.bar-middle');
      const $bottomBar = $('.bar-bottom');
      const $navItems = $('nav ul li');
      const $navLinks = $('nav ul li a');

      $openOverlay.on('click', function() {
        $openOverlay.css('pointer-events', 'none');
        
        $overlayNavigation.toggleClass('overlay-active');
        
        if ($overlayNavigation.hasClass('overlay-active')) {
          $topBar.removeClass('animate-out-top-bar').addClass('animate-top-bar');
          $middleBar.removeClass('animate-out-middle-bar').addClass('animate-middle-bar');
          $bottomBar.removeClass('animate-out-bottom-bar').addClass('animate-bottom-bar');
          $overlayNavigation.removeClass('overlay-slide-up').addClass('overlay-slide-down');
          
          $overlayNavigation.css({ display: 'block' }).velocity('transition.slideLeftIn', {
            duration: 300,
            delay: 0,
            begin: function() {
              $navItems.css({ display: 'flex' }).velocity('transition.perspectiveLeftIn', {
                stagger: 150,
                delay: 0,
                complete: function() {
                  $navLinks.velocity({ opacity: 1 }, {
                    delay: 10,
                    duration: 140
                  });
                  $openOverlay.css('pointer-events', 'auto');
                }
              });
            }
          });
        } else {
          $topBar.removeClass('animate-top-bar').addClass('animate-out-top-bar');
          $middleBar.removeClass('animate-middle-bar').addClass('animate-out-middle-bar');
          $bottomBar.removeClass('animate-bottom-bar').addClass('animate-out-bottom-bar');
          $overlayNavigation.removeClass('overlay-slide-down').addClass('overlay-slide-up');
          
          $navItems.velocity('transition.perspectiveRightOut', {
            stagger: 150,
            delay: 0,
            complete: function() {
              $overlayNavigation.velocity('transition.fadeOut', {
                delay: 0,
                duration: 300,
                complete: function() {
                  $navLinks.velocity({ opacity: 0 }, {
                    delay: 0,
                    duration: 50
                  });
                  $openOverlay.css('pointer-events', 'auto');
                  $navItems.css('display', 'none');
                }
              });
            }
          });
        }
      });
    };

    const checkJQuery = setInterval(() => {
      if (window.jQuery && window.jQuery.fn.velocity) {
        initializeNavigation();
        clearInterval(checkJQuery);
      }
    }, 100);

    return () => clearInterval(checkJQuery);
  }, []);

  return (
    <>
      <Script 
        src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js" 
        strategy="beforeInteractive"
        onLoad={() => {
          window.jQuery = window.$;
        }}
      />
      <Script 
        src="https://cdnjs.cloudflare.com/ajax/libs/velocity/1.5.2/velocity.min.js" 
        strategy="beforeInteractive"
      />

      <div className="overlay-navigation">
        <nav role="navigation">
          <ul>
            <li><Link href="/" data-content="The beginning">Home</Link></li>
            <li><Link href="/directory" data-content="Browse businesses">Directory</Link></li>
            <li><Link href="/categories" data-content="Find by category">Categories</Link></li>
            <li><Link href="/submit" data-content="Join us">Submit</Link></li>
            <li><Link href="/about" data-content="Who we are">About</Link></li>
          </ul>
        </nav>
      </div>

      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <nav className="container flex h-16 items-center">
          <Link href="/" className="mr-8 flex items-center space-x-2">
            <Building2 className="h-6 w-6" />
            <span className="text-lg font-bold">Shops Of Legacy</span>
          </Link>

          <div className="open-overlay">
            <span className="bar-top"></span>
            <span className="bar-middle"></span>
            <span className="bar-bottom"></span>
          </div>
        </nav>
      </header>
    </>
  );
}
