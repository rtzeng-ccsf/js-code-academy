# GitHub Infrastructure Engineer Questionnaire

Thanks again for applying to the Infrastructure Engineer job at GitHub! The purpose of this gist is to get a better sense of your technical skills and overall communication style. Take as much time as you need to answer these questions.

## Section 1

Engineers at GitHub communicate primarily in written form, via GitHub Issues and Pull Requests. We expect our engineers to communicate clearly and effectively; they should be able to concisely express both their ideas as well as complex technological concepts.

Please answer the following questions in as much detail as you feel comfortable with. The questions are purposefully open-ended, and we hope you take the opportunity to show us your familiarity with various technologies, tools, and techniques. Limit each answer to half a page if possible; walls of text are not required, and you'll have a chance to discuss your answers in further detail during a phone interview if we move forward in the process. Finally, feel free to use google, man pages and other resources if you'd like.

### Q1

A service daemon in production has stopped responding to network requests. You receive an alert about the health of the service, and log in to the affected node to troubleshoot. How would you gather more information about the process and what it is doing? What are common reasons a process might appear to be locked up, and how would you rule out each possibility?

### A1: 


### Q2

A user on an ubuntu machine runs `curl http://github.com`. Describe the lifecycle of the curl process and explain what happens in the kernel, over the network, and on github.com's servers before the command completes.


### A2: 


### Q3

Explain in detail each line of the following shell script. What is the purpose of this script? How would you improve it?

```
#!/bin/bash
set -e
set -o pipefail
exec sudo ngrep -P ' ' -l -W single -d bond0 -q 'SELECT' 'tcp and dst port 3306' |
  egrep "\[AP\] .\s*SELECT " |
  sed -e 's/^T .*\[AP\?\] .\s*SELECT/SELECT/' -e 's/$/;/' |
  ssh $1 -- 'sudo parallel --recend "\n" -j16 --spreadstdin mysql github_production -f -ss'
```

### A3: 


## Section 2

The following areas map to technologies we use on a regular basis at GitHub. Experience in all of these areas is not a prerequisite for working here. We'd like to know how many of these overlap with your skill set so that we can tailor our interview questions if we move forward in the process.

Please assess your experience in the following areas on a 1-5 scale, where (1) is "no knowledge or experience" and (5) is "extensive professional experience". If you're not sure, feel free to leave it blank. Just place the number next to the corresponding areas listed here:

- system administration 
  - puppet
  - ubuntu
  - debian packages
  - raid
  - new hardware burn-in testing
- virtualization
  - lxc
  - xen/kvm
  - esx
  - aws
- troubleshooting
  - debuggers (gdb, lldb)
  - profilers (perf, oprofile, perftools, strace)
  - network flow (tcpdump, pcap)
- large system design
  - unix processes and threads
  - sockets
  - signals
  - mysql
  - redis
  - elasticsearch
- coding
  - comp-sci fundamentals (data structures, big-O notation)
  - git usage
  - git internals
  - c programming
  - shell scripting
  - ruby programming
  - rails
  - javascript
  - coffeescript
- networking
  - TCP/UDP
  - bgp
  - juniper
  - arista
  - DDoS mitigation strategies and tools
  - transit setup and troubleshooting
- operational experience
  - reading and debugging code youâ€™ve never seen before
  - handling urgent incidents when on-call
  - helping other engineers understand and navigate production systems
  - handling large scale production incidents (external communications, internal coordination)
