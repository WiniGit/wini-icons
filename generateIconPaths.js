const fs = require('fs');
const path = require('path');

// Đường dẫn tới thư mục 'icons'
const iconsDirectory = path.join(__dirname, 'icons');

// Hàm để đệ quy lấy tất cả các file từ thư mục
function getAllFiles(dirPath, arrayOfFiles) {
  const files = fs.readdirSync(dirPath);

  arrayOfFiles = arrayOfFiles || [];

  files.forEach(function (file) {
    const fullPath = path.join(dirPath, file);
    if (fs.statSync(fullPath).isDirectory()) {
      arrayOfFiles = getAllFiles(fullPath, arrayOfFiles);
    } else {
      arrayOfFiles.push(fullPath.replace(__dirname, '')); // Lưu đường dẫn tương đối
    }
  });

  return arrayOfFiles;
}

// Gọi hàm để lấy danh sách tất cả các file
const icons = getAllFiles(iconsDirectory);

// Lưu kết quả vào file iconPaths.json
fs.writeFileSync('iconPaths.json', JSON.stringify(icons, null, 2));

console.log('Danh sách icon đã được lưu vào iconPaths.json');
