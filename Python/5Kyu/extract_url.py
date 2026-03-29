# Write a function that when given a URL as a string,
# parses out just the domain name and returns it as a string. For example:

# * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
# * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
# * url = "https://www.cnet.com"                -> domain name = cnet"

import re

def domain_name(url):
    pattern = r"^(?:https?://)?(?:www\.)?([^.]+)"
    match = re.search(pattern, url)
    return match.group(1)

print(domain_name("http://google.com"))
print(domain_name("http://google.co.jp"))
print(domain_name("https://123.net"))
print(domain_name("https://hyphen-site.org"))
print(domain_name("www.xakep.ru"))
print(domain_name("icann.org"))
