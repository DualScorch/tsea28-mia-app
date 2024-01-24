
let memory_start = 259;
let mia_text = `PM:
00: 0000
01: 0000
02: 0000
03: 0000
04: 0000
05: 0000
06: 0000
07: 0000
08: 0000
09: 0000
0a: 0000
0b: 0000
0c: 0000
0d: 0000
0e: 0000
0f: 0000
10: 0000
11: 0000
12: 0000
13: 0000
14: 0000
15: 0000
16: 0000
17: 0000
18: 0000
19: 0000
1a: 0000
1b: 0000
1c: 0000
1d: 0000
1e: 0000
1f: 0000
20: 0000
21: 0000
22: 0000
23: 0000
24: 0000
25: 0000
26: 0000
27: 0000
28: 0000
29: 0000
2a: 0000
2b: 0000
2c: 0000
2d: 0000
2e: 0000
2f: 0000
30: 0000
31: 0000
32: 0000
33: 0000
34: 0000
35: 0000
36: 0000
37: 0000
38: 0000
39: 0000
3a: 0000
3b: 0000
3c: 0000
3d: 0000
3e: 0000
3f: 0000
40: 0000
41: 0000
42: 0000
43: 0000
44: 0000
45: 0000
46: 0000
47: 0000
48: 0000
49: 0000
4a: 0000
4b: 0000
4c: 0000
4d: 0000
4e: 0000
4f: 0000
50: 0000
51: 0000
52: 0000
53: 0000
54: 0000
55: 0000
56: 0000
57: 0000
58: 0000
59: 0000
5a: 0000
5b: 0000
5c: 0000
5d: 0000
5e: 0000
5f: 0000
60: 0000
61: 0000
62: 0000
63: 0000
64: 0000
65: 0000
66: 0000
67: 0000
68: 0000
69: 0000
6a: 0000
6b: 0000
6c: 0000
6d: 0000
6e: 0000
6f: 0000
70: 0000
71: 0000
72: 0000
73: 0000
74: 0000
75: 0000
76: 0000
77: 0000
78: 0000
79: 0000
7a: 0000
7b: 0000
7c: 0000
7d: 0000
7e: 0000
7f: 0000
80: 0000
81: 0000
82: 0000
83: 0000
84: 0000
85: 0000
86: 0000
87: 0000
88: 0000
89: 0000
8a: 0000
8b: 0000
8c: 0000
8d: 0000
8e: 0000
8f: 0000
90: 0000
91: 0000
92: 0000
93: 0000
94: 0000
95: 0000
96: 0000
97: 0000
98: 0000
99: 0000
9a: 0000
9b: 0000
9c: 0000
9d: 0000
9e: 0000
9f: 0000
a0: 0000
a1: 0000
a2: 0000
a3: 0000
a4: 0000
a5: 0000
a6: 0000
a7: 0000
a8: 0000
a9: 0000
aa: 0000
ab: 0000
ac: 0000
ad: 0000
ae: 0000
af: 0000
b0: 0000
b1: 0000
b2: 0000
b3: 0000
b4: 0000
b5: 0000
b6: 0000
b7: 0000
b8: 0000
b9: 0000
ba: 0000
bb: 0000
bc: 0000
bd: 0000
be: 0000
bf: 0000
c0: 0000
c1: 0000
c2: 0000
c3: 0000
c4: 0000
c5: 0000
c6: 0000
c7: 0000
c8: 0000
c9: 0000
ca: 0000
cb: 0000
cc: 0000
cd: 0000
ce: 0000
cf: 0000
d0: 0000
d1: 0000
d2: 0000
d3: 0000
d4: 0000
d5: 0000
d6: 0000
d7: 0000
d8: 0000
d9: 0000
da: 0000
db: 0000
dc: 0000
dd: 0000
de: 0000
df: 0000
e0: 0000
e1: 0000
e2: 0000
e3: 0000
e4: 0000
e5: 0000
e6: 0000
e7: 0000
e8: 0000
e9: 0000
ea: 0000
eb: 0000
ec: 0000
ed: 0000
ee: 0000
ef: 0000
f0: 0000
f1: 0000
f2: 0000
f3: 0000
f4: 0000
f5: 0000
f6: 0000
f7: 0000
f8: 0000
f9: 0000
fa: 0000
fb: 0000
fc: 0000
fd: 0000
fe: 0000
ff: 0000

MyM:
00: 0000000
01: 0000000
02: 0000000
03: 0000000
04: 0000000
05: 0000000
06: 0000000
07: 0000000
08: 0000000
09: 0000000
0a: 0000000
0b: 0000000
0c: 0000000
0d: 0000000
0e: 0000000
0f: 0000000
10: 0000000
11: 0000000
12: 0000000
13: 0000000
14: 0000000
15: 0000000
16: 0000000
17: 0000000
18: 0000000
19: 0000000
1a: 0000000
1b: 0000000
1c: 0000000
1d: 0000000
1e: 0000000
1f: 0000000
20: 0000000
21: 0000000
22: 0000000
23: 0000000
24: 0000000
25: 0000000
26: 0000000
27: 0000000
28: 0000000
29: 0000000
2a: 0000000
2b: 0000000
2c: 0000000
2d: 0000000
2e: 0000000
2f: 0000000
30: 0000000
31: 0000000
32: 0000000
33: 0000000
34: 0000000
35: 0000000
36: 0000000
37: 0000000
38: 0000000
39: 0000000
3a: 0000000
3b: 0000000
3c: 0000000
3d: 0000000
3e: 0000000
3f: 0000000
40: 0000000
41: 0000000
42: 0000000
43: 0000000
44: 0000000
45: 0000000
46: 0000000
47: 0000000
48: 0000000
49: 0000000
4a: 0000000
4b: 0000000
4c: 0000000
4d: 0000000
4e: 0000000
4f: 0000000
50: 0000000
51: 0000000
52: 0000000
53: 0000000
54: 0000000
55: 0000000
56: 0000000
57: 0000000
58: 0000000
59: 0000000
5a: 0000000
5b: 0000000
5c: 0000000
5d: 0000000
5e: 0000000
5f: 0000000
60: 0000000
61: 0000000
62: 0000000
63: 0000000
64: 0000000
65: 0000000
66: 0000000
67: 0000000
68: 0000000
69: 0000000
6a: 0000000
6b: 0000000
6c: 0000000
6d: 0000000
6e: 0000000
6f: 0000000
70: 0000000
71: 0000000
72: 0000000
73: 0000000
74: 0000000
75: 0000000
76: 0000000
77: 0000000
78: 0000000
79: 0000000
7a: 0000000
7b: 0000000
7c: 0000000
7d: 0000000
7e: 0000000
7f: 0000000

K1:
00: 00
01: 00
02: 00
03: 00
04: 00
05: 00
06: 00
07: 00
08: 00
09: 00
0a: 00
0b: 00
0c: 00
0d: 00
0e: 00
0f: 00

K2:
00: 00
01: 00
02: 00
03: 00

PC:
00

ASR:
00

AR:
0000

HR:
0000

GR0:
0001

GR1:
0000

GR2:
0000

GR3:
0000

IR:
0000

MyPC:
00

SMyPC:
00

LC:
00

O_flag:

C_flag:

N_flag:

Z_flag:

L_flag:
End_of_dump_file
`

type MIAData = {alu: string, tb: string, fb: string, s: string, p: string, lc: string, seq: string, uadr: string, active: boolean, description: string, id: string};

function getHex(data: MIAData): string {
    let hex = '';
    hex += data.alu + data.tb + data.fb + data.s + data.p + data.lc + data.seq + data.uadr;
    return parseInt(hex, 2).toString(16).padStart(7, '0');
}

function getMIA(data: MIAData[], text: string): string {
    let new_lines: string[] = [];
    let old_lines: string[] = text.split(/(?:\r\n|\r|\n|^)(.*?)(?:\r\n|\r|\n|$)/g).slice(1);
    let memory_started = false;
    let current_data_pointer = 0;
    console.log(data)
    old_lines.forEach((line, index) => {
        if (index === memory_start){
            memory_started = true;
        }
        if (!memory_started || current_data_pointer >= data.length) {
            new_lines.push(line);
        }
        else {
            let values = line.split(" ")
            values[1] = getHex(data[current_data_pointer]);
            new_lines.push(values.join(" "));
            current_data_pointer++;
        }
    });

    // console.log(new_lines)
    return new_lines.slice(0, -1).join('\n');
}

let getNewId = () => {
    return Math.floor(Math.random() * 10000000000).toString(16);
}


function MIAtoData(data: string): MIAData[] {
    let lines = data.split(/(?:\r\n|\r|\n|^)(.*?)(?:\r\n|\r|\n|$)/g).slice(1);
    let memory_start = lines.findIndex((line) => line.startsWith("MyM:")) + 1;
    let memory_end = lines.findIndex((line) => line.startsWith("K1:")) - 2;
    let memory_data: MIAData[] = [];

    let real_memory_end: number = memory_start;
    for (let i = memory_end; i >= memory_start; i--) {
        let line = lines[i];
        let values = line.split(" ");
        let hex = values[1];
        if (hex === "0000000") {
            continue;
        }

        real_memory_end = i;
        break;
    }

    lines.forEach((line, index) => {
        if (index < memory_start || index > real_memory_end) {
            return;
        }
    
        let values = line.split(" ");
        let hex = values[1];
        let binary = parseInt(hex, 16).toString(2).padStart(28, '0');
        let alu = binary.slice(3, 7);
        let tb = binary.slice(7, 10);
        let fb = binary.slice(10, 13);
        let s = binary.slice(13, 14);
        let p = binary.slice(14, 15);
        let lc = binary.slice(15, 17);
        let seq = binary.slice(17, 21);
        let uadr = binary.slice(21, 28);
        let id = getNewId();
        memory_data.push({alu, tb, fb, s, p, lc, seq, uadr, active: true, description: "", id});
})
        return memory_data;
}

function verifyMIA(data: string): boolean {
    let lines = data.split(/(?:\r\n|\r|\n|^)(.*?)(?:\r\n|\r|\n|$)/g).slice(1);
    let required_sections = ["PM", "MyM", "K1", "K2", "PC", "ASR", "AR", "HR", "GR0", "GR1", "GR2", "GR3", "IR", "MyPC", "SMyPC", "LC", "O_flag", "C_flag", "N_flag", "Z_flag", "L_flag"];
    for (let i = 0; i < required_sections.length; i++) {
        for (let j = 0; j < lines.length; j++) {
            if (lines[j].startsWith(required_sections[i])) {
                break;
            }
            if (j === lines.length - 1) {
                return false;
            }
        }
    }
    return true;
}

function clearMIAmemory(data: string): string {
    let lines = data.split(/(?:\r\n|\r|\n|^)(.*?)(?:\r\n|\r|\n|$)/g).slice(1);
    let memory_start = lines.findIndex((line) => line.startsWith("MyM:")) + 1;
    let memory_end = lines.findIndex((line) => line.startsWith("K1:")) - 2;
    lines.forEach((line, index) => {
        if (index < memory_start || index > memory_end) {
            return;
        }
    
        let values = line.split(" ");
        values[1] = "0000000";
        lines[index] = values.join(" ");
    });
    return lines.join("\n");
}

export {getMIA, mia_text, MIAtoData, verifyMIA, clearMIAmemory}