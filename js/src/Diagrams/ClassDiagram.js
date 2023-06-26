/**
 * Adds the general palette to the sidebar.
 */
const addClassDiagramPalette = function (sb, expand) {

  // Reusable cells
  var field = new mxCell('+ field: type', new mxGeometry(0, 0, 100, 26), 'text;html=1;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;whiteSpace=wrap;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;');
  var attributeField = new mxCell('+ field: type', new mxGeometry(0, 0, 100, 26), 'text;html=1;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;whiteSpace=wrap;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;componentName=attribute');
  var methodField = new mxCell('+ method(type): type', new mxGeometry(0, 0, 100, 26), 'text;html=1;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;whiteSpace=wrap;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;componentName=method');

  field.vertex = true;
  attributeField.vertex = true;
  methodField.vertex = true;

  var divider = new mxCell('', new mxGeometry(0, 0, 40, 8), 'line;html=1;strokeWidth=1;fillColor=none;align=left;verticalAlign=middle;spacingTop=-1;spacingLeft=3;spacingRight=3;rotatable=0;labelPosition=right;points=[];portConstraint=eastwest;');
  divider.vertex = true;

  // Default tags
  var dt = 'uml static class ';

  var fns = [  
    sb.addEntry(dt + 'object instance', function () {
      var cell = new mxCell('Classname', new mxGeometry(0, 0, 160, 90),
        'swimlane;fontStyle=1;align=center;verticalAlign=top;childLayout=stackLayout;horizontal=1;startSize=26;horizontalStack=0;resizeParent=1;resizeParentMax=0;resizeLast=0;collapsible=1;marginBottom=0;');
      cell.vertex = true;
      cell.insert(field.clone());
      cell.insert(divider.clone());
      cell.insert(sb.cloneCell(field, '+ method(type): type'));

      return sb.createVertexTemplateFromCells([cell], cell.geometry.width, cell.geometry.height, 'Class');
    }),    
    sb.addEntry(dt + 'section subsection', function () {
      var cell = new mxCell('Classname', new mxGeometry(0, 0, 140, 110),
        'swimlane;fontStyle=0;childLayout=stackLayout;horizontal=1;startSize=26;fillColor=none;horizontalStack=0;resizeParent=1;resizeParentMax=0;resizeLast=0;collapsible=1;marginBottom=0;');
      cell.vertex = true;
      cell.insert(field.clone());
      cell.insert(field.clone());
      cell.insert(field.clone());

      return sb.createVertexTemplateFromCells([cell], cell.geometry.width, cell.geometry.height, 'Class 2');
    }),
    sb.createVertexTemplateEntry('verticalAlign=top;align=left;overflow=fill;html=1;', 180, 90,
      '<div style="box-sizing:border-box;width:100%;background:#e4e4e4;padding:2px;">Tablename</div>' +
      '<table style="width:100%;font-size:1em;" cellpadding="2" cellspacing="0">' +
      '<tr><td>PK</td><td>uniqueId</td></tr><tr><td>FK1</td><td>' +
      'foreignKey</td></tr><tr><td></td><td>fieldname</td></tr></table>', 'Entity', null, null, 'er entity table'),
    sb.addEntry(dt + 'object instance', function () {
      var cell = new mxCell('<p style="margin:0px;margin-top:4px;text-align:center;">' +
        '<b>Class</b></p>' +
        '<hr size="1"/><div style="height:2px;"></div>', new mxGeometry(0, 0, 140, 60),
        'verticalAlign=top;align=left;overflow=fill;fontSize=12;fontFamily=Helvetica;html=1;');
      cell.vertex = true;

      return sb.createVertexTemplateFromCells([cell.clone()], cell.geometry.width, cell.geometry.height, 'Class 3');
    }),
    sb.addEntry(dt + 'object instance', function () {
      var cell = new mxCell('<p style="margin:0px;margin-top:4px;text-align:center;">' +
        '<b>Class</b></p>' +
        '<hr size="1"/><div style="height:2px;"></div><hr size="1"/><div style="height:2px;"></div>', new mxGeometry(0, 0, 140, 60),
        'verticalAlign=top;align=left;overflow=fill;fontSize=12;fontFamily=Helvetica;html=1;');
      cell.vertex = true;

      return sb.createVertexTemplateFromCells([cell.clone()], cell.geometry.width, cell.geometry.height, 'Class 4');
    }),
    sb.addEntry(dt + 'object instance', function () {
      var cell = new mxCell('<p style="margin:0px;margin-top:4px;text-align:center;">' +
        '<b>Class</b></p>' +
        '<hr size="1"/><p style="margin:0px;margin-left:4px;">+ field: Type</p><hr size="1"/>' +
        '<p style="margin:0px;margin-left:4px;">+ method(): Type</p>', new mxGeometry(0, 0, 160, 90),
        'verticalAlign=top;align=left;overflow=fill;fontSize=12;fontFamily=Helvetica;html=1;');
      cell.vertex = true;

      return sb.createVertexTemplateFromCells([cell.clone()], cell.geometry.width, cell.geometry.height, 'Class 5');
    }),
    sb.createVertexTemplateEntry(
      'text;html=1;align=center;fontStyle=1;verticalAlign=middle;spacingLeft=3;spacingRight=3;strokeColor=none;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;',
      80, 26, 'Title', 'Title', null, null, dt + 'title label'
    ),
    sb.createEdgeTemplateEntry('edgeStyle=orthogonalEdgeStyle;rounded=0;html=1;entryX=0.5;entryY=0;dashed=1;jettySize=auto;orthogonalLoop=1;', 160, 0, 'Description', 'Relationship', null, 'uml generalization extend'),
  ];

  sb.addPaletteFunctions('classDiagram', mxResources.get('classDiagram'), expand || false, fns);
};

module.exports = addClassDiagramPalette;