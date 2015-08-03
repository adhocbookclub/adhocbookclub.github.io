Chart.defaults.global.responsive = true;

var sumsqData = {
  labels: ["Foundation", "Zhuangzi", "Illuminated", "Laughter", "Americanah", "High-Rise", "Elegance", "Bold", "Zero to One", "Neuromancer", "Confederacy", "Hill House", "Do No Harm", "Kite Runner", "Ready Player One", "Jim Crow"],
  datasets: [
    {
      label: "Sum of Squares",
      fillColor: "rgba(51,122,183,0.5)",
      strokeColor: "rgba(51,122,183,0.8)",
      highlightFill: "rgba(51,122,183,0.75)",
      highlightStroke: "rgba(51,122,183,1)",
      data: [216, 208, 192, 184, 174, 159, 150, 142, 140, 134, 130, 125, 116, 116, 112, 98]
    }
  ]
};

var avgData = {
  labels: ["Foundation", "Zhuangzi", "Illuminated", "Laughter", "Americanah", "Elegance", "High-Rise", "Bold", "Zero to One", "Neuromancer", "Confederacy", "Hill House", "Do No Harm", "Kite Runner", "Ready Player One", "Jim Crow"],
  datasets: [
    {
      label: "Sum of Squares",
      fillColor: "rgba(217,83,79,0.5)",
      strokeColor: "rgba(217,83,79,0.8)",
      highlightFill: "rgba(217,83,79,0.75)",
      highlightStroke: "rgba(217,83,79,1)",
      data: [3.600, 3.333, 3.200, 3.200, 3.067, 2.933, 2.867, 2.800, 2.667, 2.667, 2.533, 2.533, 2.467, 2.400, 2.400, 2.267]
    }
  ]
};

var sumsqCtx = document.getElementById("sumSqBar").getContext("2d");
var sumSq = new Chart(sumsqCtx).Bar(sumsqData);

var avgCtx = document.getElementById("avgBar").getContext("2d");
var avg = new Chart(avgCtx).Bar(avgData);

var ratings = [
  {
    "voter": "A",
    "confederacy": "3",
    "americanah": "1",
    "bold": "3",
    "illuminated": "1",
    "laughter": "1",
    "harm": "3",
    "elegance": "2",
    "foundation": "3",
    "haunting": "1",
    "highrise": "1",
    "kite": "1",
    "neuromancer": "1",
    "jim": "1",
    "ready": "1",
    "zero": "4",
    "zhuangzi": "3"
  },
  {
    "voter": "B",
    "confederacy": "1",
    "americanah": "4",
    "bold": "2",
    "illuminated": "4",
    "laughter": "5",
    "harm": "1",
    "elegance": "3",
    "foundation": "2",
    "haunting": "4",
    "highrise": "5",
    "kite": "5",
    "neuromancer": "3",
    "jim": "2",
    "ready": "1",
    "zero": "1",
    "zhuangzi": "3"
  },
  {
    "voter": "C",
    "confederacy": "4",
    "americanah": "4",
    "bold": "2",
    "illuminated": "2",
    "laughter": "2",
    "harm": "2",
    "elegance": "3",
    "foundation": "5",
    "haunting": "2",
    "highrise": "3",
    "kite": "2",
    "neuromancer": "4",
    "jim": "4",
    "ready": "5",
    "zero": "2",
    "zhuangzi": "1"
  },
  {
    "voter": "D ",
    "confederacy": "1",
    "americanah": "1",
    "bold": "2",
    "illuminated": "1",
    "laughter": "5",
    "harm": "1",
    "elegance": "2",
    "foundation": "4",
    "haunting": "1",
    "highrise": "5",
    "kite": "4",
    "neuromancer": "4",
    "jim": "3",
    "ready": "2",
    "zero": "4",
    "zhuangzi": "1"
  },
  {
    "voter": "E",
    "confederacy": "4",
    "americanah": "3",
    "bold": "1",
    "illuminated": "5",
    "laughter": "4",
    "harm": "2",
    "elegance": "5",
    "foundation": "5",
    "haunting": "4",
    "highrise": "4",
    "kite": "2",
    "neuromancer": "3",
    "jim": "2",
    "ready": "3",
    "zero": "1",
    "zhuangzi": "5"
  },
  {
    "voter": "F",
    "confederacy": "1",
    "americanah": "3",
    "bold": "5",
    "illuminated": "5",
    "laughter": "2",
    "harm": "5",
    "elegance": "1",
    "foundation": "4",
    "haunting": "5",
    "highrise": "5",
    "kite": "1",
    "neuromancer": "3",
    "jim": "1",
    "ready": "5",
    "zero": "4",
    "zhuangzi": "1"
  },
  {
    "voter": "G",
    "confederacy": "5",
    "americanah": "4",
    "bold": "2",
    "illuminated": "3",
    "laughter": "4",
    "harm": "2",
    "elegance": "3",
    "foundation": "3",
    "haunting": "1",
    "highrise": "1",
    "kite": "2",
    "neuromancer": "2",
    "jim": "3",
    "ready": "2",
    "zero": "1",
    "zhuangzi": "5"
  },
  {
    "voter": "H",
    "confederacy": "1",
    "americanah": "1",
    "bold": "5",
    "illuminated": "1",
    "laughter": "1",
    "harm": "3",
    "elegance": "1",
    "foundation": "5",
    "haunting": "1",
    "highrise": "1",
    "kite": "1",
    "neuromancer": "5",
    "jim": "1",
    "ready": "2",
    "zero": "5",
    "zhuangzi": "5"
  },
  {
    "voter": "I",
    "confederacy": "4",
    "americanah": "3",
    "bold": "2",
    "illuminated": "3",
    "laughter": "4",
    "harm": "2",
    "elegance": "4",
    "foundation": "4",
    "haunting": "4",
    "highrise": "3",
    "kite": "4",
    "neuromancer": "2",
    "jim": "4",
    "ready": "3",
    "zero": "2",
    "zhuangzi": "2"
  },
  {
    "voter": "J",
    "confederacy": "1",
    "americanah": "5",
    "bold": "4",
    "illuminated": "1",
    "laughter": "4",
    "harm": "4",
    "elegance": "4",
    "foundation": "1",
    "haunting": "1",
    "highrise": "1",
    "kite": "1",
    "neuromancer": "1",
    "jim": "1",
    "ready": "1",
    "zero": "4",
    "zhuangzi": "5"
  },
  {
    "voter": "K",
    "confederacy": "4",
    "americanah": "5",
    "bold": "2",
    "illuminated": "4",
    "laughter": "3",
    "harm": "2",
    "elegance": "2",
    "foundation": "2",
    "haunting": "2",
    "highrise": "2",
    "kite": "3",
    "neuromancer": "2",
    "jim": "3",
    "ready": "3",
    "zero": "3",
    "zhuangzi": "4"
  },
  {
    "voter": "L",
    "confederacy": "3",
    "americanah": "5",
    "bold": "4",
    "illuminated": "5",
    "laughter": "5",
    "harm": "4",
    "elegance": "3",
    "foundation": "4",
    "haunting": "3",
    "highrise": "2",
    "kite": "2",
    "neuromancer": "3",
    "jim": "3",
    "ready": "3",
    "zero": "5",
    "zhuangzi": "4"
  },
  {
    "voter": "M",
    "confederacy": "1",
    "americanah": "1",
    "bold": "1",
    "illuminated": "3",
    "laughter": "1",
    "harm": "1",
    "elegance": "3",
    "foundation": "5",
    "haunting": "1",
    "highrise": "5",
    "kite": "1",
    "neuromancer": "1",
    "jim": "1",
    "ready": "1",
    "zero": "1",
    "zhuangzi": "1"
  },
  {
    "voter": "N",
    "confederacy": "4",
    "americanah": "4",
    "bold": "3",
    "illuminated": "5",
    "laughter": "4",
    "harm": "3",
    "elegance": "5",
    "foundation": "3",
    "haunting": "5",
    "highrise": "3",
    "kite": "2",
    "neuromancer": "1",
    "jim": "4",
    "ready": "1",
    "zero": "1",
    "zhuangzi": "5"
  },
  {
    "voter": "O",
    "confederacy": "1",
    "americanah": "2",
    "bold": "4",
    "illuminated": "5",
    "laughter": "3",
    "harm": "3",
    "elegance": "3",
    "foundation": "4",
    "haunting": "2",
    "highrise": "2",
    "kite": "5",
    "neuromancer": "5",
    "jim": "1",
    "ready": "3",
    "zero": "2",
    "zhuangzi": "5"
  }
];

$('#table').bootstrapTable({
  data: ratings,
  columns: [
    {
      align: 'center',
      field: 'voter',
      title: 'Voter',
    }, {
      align: 'center',
      field: 'confederacy',
      halign: 'center',
      title: 'A Confederacy of Dunces',
      width: '100px'
    }, {
      align: 'center',
      field: 'americanah',
      halign: 'center',
      title: 'Americanah',
      width: '100px'
    }, {
      align: 'center',
      field: 'bold',
      halign: 'center',
      title: 'Bold',
      width: '100px'
    }, {
      align: 'center',
      field: 'illuminated',
      halign: 'center',
      title: 'Everything Is Illuminated',
      width: '100px'
    }, {
      align: 'center',
      field: 'laughter',
      halign: 'center',
      title: 'The Book of Laughter and Forgetting',
      width: '100px'
    }, {
      align: 'center',
      field: 'harm',
      halign: 'center',
      title: 'Do No Harm',
      width: '100px'
    }, {
      align: 'center',
      field: 'elegance',
      halign: 'center',
      title: 'The Elegance of the Hedgehog',
      width: '100px'
    }, {
      align: 'center',
      field: 'foundation',
      halign: 'center',
      title: 'Foundation',
      width: '100px'
    }, {
      align: 'center',
      field: 'haunting',
      halign: 'center',
      title: 'The Haunting of Hill House',
      width: '100px'
    }, {
      align: 'center',
      field: 'highrise',
      halign: 'center',
      title: 'High-Rise',
      width: '100px'
    }, {
      align: 'center',
      field: 'kite',
      halign: 'center',
      title: 'The Kite Runner',
      width: '100px'
    }, {
      align: 'center',
      field: 'neuromancer',
      halign: 'center',
      title: 'Neuromancer',
      width: '100px'
    }, {
      align: 'center',
      field: 'jim',
      halign: 'center',
      title: 'The New Jim Crow',
      width: '100px'
    }, {
      align: 'center',
      field: 'ready',
      halign: 'center',
      title: 'Ready Player One',
      width: '100px'
    }, {
      align: 'center',
      field: 'zero',
      halign: 'center',
      title: 'Zero to One',
      width: '100px'
    }, {
      align: 'center',
      field: 'zhuangzi',
      halign: 'center',
      title: 'Zhuangzi: Basic Writings',
      width: '100px'
    }
  ]
});

$('.fixed-table-loading').css('display', 'none');
