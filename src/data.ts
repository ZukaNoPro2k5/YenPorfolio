import { ConclusionSection, Profile, Project } from './types';
import profileImage from './assets/thao-yen-profile.jpeg';

export const PROFILE: Profile = {
  name: 'Lê Thị Thảo Yến',
  studentId: '23100442',
  phone: '0389826035',
  email: 'lethithaoyen1212@gmail.com',
  faculty: 'Khoa Răng-Hàm-Mặt',
  cohort: 'QH.2023.R',
  university: 'Trường Đại học Y Dược - Đại học Quốc gia Hà Nội',
  hobbies: 'Nghe nhạc, xem phim, đọc sách',
  intro:
    'Em là Lê Thị Thảo Yến, sinh viên năm 3 khoa Răng-Hàm-Mặt, khóa QH.2023.R. Portfolio này ghi lại quá trình học tập môn Công nghệ số và Trí tuệ nhân tạo theo cách rõ ràng, có hệ thống và mang dấu ấn cá nhân.',
  academicGoal:
    'Trong quá trình học tập tại khoa Răng-Hàm-Mặt, em mong muốn không chỉ nâng cao kiến thức chuyên môn mà còn phát triển thêm các kỹ năng cần thiết để hỗ trợ việc học và nghiên cứu hiệu quả hơn. Em đặc biệt quan tâm đến công nghệ số và các ứng dụng trí tuệ nhân tạo trong y khoa vì đây là những lĩnh vực ngày càng quan trọng trong môi trường học tập và làm việc hiện nay.',
  portfolioGoal:
    'Portfolio này được thực hiện nhằm tổng hợp những bài tập, sản phẩm và kiến thức em đã học được trong quá trình học môn Công nghệ số và Trí tuệ nhân tạo. Việc xây dựng portfolio cũng giúp em rèn luyện kỹ năng trình bày nội dung, sắp xếp thông tin và sử dụng các công cụ số trong học tập.'
};

export const PROJECTS: Project[] = [
  {
    id: 'tep-tin-thu-muc',
    title: 'Bài tập 1 mục 1.4: Thao tác cơ bản với tệp tin và thư mục',
    shortTitle: 'Tệp tin và thư mục',
    tags: ['Windows', 'File Explorer', 'Quản lý dữ liệu'],
    objective:
      'Giúp người học nắm vững các thao tác cơ bản trong quản lý tệp tin và thư mục trên hệ điều hành Windows, bao gồm tạo mới, đổi tên, sao chép, di chuyển, xóa và khôi phục dữ liệu.',
    processSummary:
      'Em sử dụng File Explorer để tạo thư mục chính ThucHanh_HoTenSinhVien, tạo mới tệp văn bản, đổi tên tệp, tạo thư mục con, sao chép và di chuyển tệp bằng Copy, Paste, Cut. Em cũng thực hành xóa tệp, xóa vĩnh viễn bằng Shift + Delete và khôi phục tệp từ Recycle Bin.',
    reflection:
      'Cấu trúc thư mục được thiết kế theo mô hình phân cấp giúp dữ liệu gọn gàng, dễ quản lý và thuận tiện cho việc tìm kiếm. Quy tắc đặt tên ngắn gọn, dễ hiểu, thống nhất và tránh ký tự đặc biệt giúp nâng cao hiệu quả làm việc, tiết kiệm thời gian và hình thành thói quen quản lý dữ liệu chuyên nghiệp.',
    pdfName: 'Thao tác cơ bản với tệp tin và thư mục.pdf',
    pdfPath: '/pdfs/tep-tin-thu-muc.pdf'
  },
  {
    id: 'tim-kiem-hoc-thuat',
    title: 'Bài tập 2 mục 2.4: Tìm kiếm và đánh giá thông tin trong học thuật',
    shortTitle: 'Tìm kiếm học thuật',
    tags: ['Học thuật', 'Nguồn tin', 'Tìm kiếm nâng cao'],
    objective:
      'Nâng cao kỹ năng tìm kiếm, khai thác và đánh giá thông tin học thuật trên môi trường số, từ đó tiếp cận nguồn tài liệu đáng tin cậy và sử dụng thông tin hiệu quả trong học tập, nghiên cứu.',
    processSummary:
      'Em lựa chọn một chủ đề học thuật liên quan đến lĩnh vực quan tâm, sử dụng các kỹ thuật tìm kiếm nâng cao như giới hạn phạm vi theo tên miền, tìm theo định dạng tệp và tìm kiếm chính xác bằng cụm từ khóa. Sau đó em so sánh, sàng lọc và tổng hợp kết quả thành báo cáo.',
    reflection:
      'Các toán tử site:, filetype: và dấu ngoặc kép giúp tăng độ chính xác của kết quả. Để đánh giá độ tin cậy, em xem xét nguồn gốc xuất bản, uy tín tổ chức, tác giả, thời gian công bố, mức độ liên quan, tính khách quan và khả năng kiểm chứng qua nhiều nguồn.',
    pdfName: 'Tìm kiếm và đánh giá thông tin trong học thuật.pdf',
    pdfPath: '/pdfs/tim-kiem-hoc-thuat.pdf'
  },
  {
    id: 'prompt-hoc-tap',
    title: 'Bài tập 3 mục 3.4: Viết Prompt hiệu quả cho các tác vụ học tập',
    shortTitle: 'Prompt học tập',
    tags: ['Prompt', 'AI tạo sinh', 'Tự học'],
    objective:
      'Giúp người học hiểu vai trò của prompt khi tương tác với công cụ AI tạo sinh, đồng thời rèn luyện khả năng xây dựng prompt rõ ràng, có mục tiêu và phù hợp với nhu cầu học tập.',
    processSummary:
      'Em lựa chọn một nhiệm vụ học tập cụ thể và xây dựng hai phiên bản prompt khác nhau. Phiên bản đầu đơn giản, phiên bản sau được bổ sung yêu cầu về nội dung, phạm vi và cách trình bày. Em so sánh phản hồi của AI để đánh giá tác động của prompt.',
    reflection:
      'Prompt cải thiện cho kết quả tốt hơn vì xác định rõ mục tiêu, cung cấp ngữ cảnh đầy đủ và nêu yêu cầu cụ thể. Việc bổ sung đối tượng hướng đến, phạm vi nội dung và hình thức trình bày giúp câu trả lời logic, đầy đủ và giảm thông tin lan man.',
    pdfName: 'Viết prompt hiệu quả cho các tác vụ học tập.pdf',
    pdfPath: '/pdfs/prompt-hoc-tap.pdf'
  },
  {
    id: 'hop-tac-truc-tuyen',
    title: 'Bài tập 4 mục 4.4: Sử dụng công cụ hợp tác trực tuyến cho dự án nhóm',
    shortTitle: 'Hợp tác trực tuyến',
    tags: ['Trello', 'Notion', 'Làm việc nhóm'],
    objective:
      'Giúp người học làm quen và sử dụng hiệu quả các công cụ hỗ trợ làm việc nhóm trong môi trường số, rèn luyện kỹ năng lập kế hoạch, phân công, theo dõi tiến độ và phối hợp nhóm.',
    processSummary:
      'Em xây dựng một dự án nhóm giả định và sử dụng công cụ như Trello hoặc Notion để thiết lập bảng quản lý dự án, xác định công việc, phân chia nhiệm vụ cho từng thành viên và xây dựng lộ trình hoàn thành theo từng giai đoạn.',
    reflection:
      'Công cụ hợp tác trực tuyến đóng vai trò như nền tảng trung tâm để quản lý nhiệm vụ, chia sẻ tài liệu, cập nhật thông tin và trao đổi ý kiến. Việc theo dõi trạng thái như Chưa thực hiện, Đang thực hiện, Đã hoàn thành giúp công việc minh bạch và hạn chế bỏ sót nhiệm vụ.',
    pdfName: 'Sử dụng công cụ trực tuyến trong dự án nhóm.pdf',
    pdfPath: '/pdfs/hop-tac-truc-tuyen.pdf'
  },
  {
    id: 'ai-sang-tao-noi-dung',
    title: 'Bài tập 5 mục 5.4: Sử dụng AI tạo sinh để hỗ trợ sáng tạo nội dung',
    shortTitle: 'AI sáng tạo nội dung',
    tags: ['Sáng tạo nội dung', 'AI', 'Truyền thông số'],
    objective:
      'Giúp người học biết cách vận dụng công cụ AI tạo sinh trong quá trình xây dựng và phát triển nội dung số, kết hợp ý tưởng của con người với khả năng hỗ trợ của AI.',
    processSummary:
      'Em lựa chọn một chủ đề phù hợp và sử dụng AI để hỗ trợ từng giai đoạn sáng tạo nội dung. Em ghi nhận công cụ đã dùng, mô tả cách áp dụng AI vào từng công đoạn và đánh giá hiệu quả AI mang lại đối với sản phẩm cuối cùng.',
    reflection:
      'Quy trình gồm chọn chủ đề, nghiên cứu thông tin, xây dựng ý tưởng, soạn thảo nội dung, thiết kế hình ảnh hoặc video và hoàn thiện sản phẩm. AI hỗ trợ đề xuất ý tưởng, tạo dàn ý, viết bản nháp và gợi ý tối ưu, giúp rút ngắn thời gian và tăng tính sáng tạo.',
    pdfName: 'Sử dụng AI tạo sinh trong sáng tạo nội dung.pdf',
    pdfPath: '/pdfs/ai-sang-tao-noi-dung.pdf'
  },
  {
    id: 'ai-co-trach-nhiem',
    title: 'Bài tập 6 mục 6.4: Sử dụng AI có trách nhiệm trong học tập và nghiên cứu',
    shortTitle: 'AI có trách nhiệm',
    tags: ['Đạo đức học thuật', 'AI', 'Nghiên cứu'],
    objective:
      'Nâng cao nhận thức về việc sử dụng trí tuệ nhân tạo một cách có trách nhiệm, phù hợp với nguyên tắc đạo đức và chuẩn mực học thuật.',
    processSummary:
      'Em tìm hiểu các nguyên tắc liên quan đến đạo đức học thuật, bản quyền và trách nhiệm khi sử dụng AI. Em tự đánh giá cách bản thân sử dụng AI, xác định lợi ích và nguy cơ nếu dùng không đúng cách, từ đó xây dựng bộ nguyên tắc cá nhân.',
    reflection:
      'Em xác định AI là công cụ hỗ trợ chứ không thay thế tư duy cá nhân; luôn kiểm chứng thông tin từ nhiều nguồn; không dùng nguyên văn nội dung AI nếu chưa chỉnh sửa và đánh giá lại; tuân thủ quy định nhà trường, tôn trọng sở hữu trí tuệ và trích dẫn nguồn khi cần.',
    pdfName: 'Sử dụng AI có trách nhiệm trong học tập và nghiên cứu.pdf',
    pdfPath: '/pdfs/ai-co-trach-nhiem.pdf'
  }
];

export const CONCLUSION: ConclusionSection[] = [
  {
    id: 'experience',
    title: 'Trải nghiệm cá nhân',
    body:
      'Trong quá trình thực hiện dự án Portfolio, em nhận thấy đây không chỉ là một bài tập tổng hợp sản phẩm học tập mà còn là hành trình nhìn lại bản thân một cách hệ thống và nghiêm túc. Ban đầu em khá lúng túng khi chọn lọc nội dung, nhưng càng làm em càng hiểu Portfolio là nơi thể hiện sự phát triển theo thời gian.'
  },
  {
    id: 'skills',
    title: 'Kiến thức và kỹ năng quan trọng',
    body:
      'Điều quan trọng nhất em học được là kỹ năng tổ chức và chọn lọc thông tin. Em cũng cải thiện kỹ năng trình bày nội dung logic, biết sắp xếp theo dòng thời gian hoặc chủ đề để người xem dễ theo dõi, đồng thời chú ý hơn đến bố cục, hình ảnh, màu sắc và font chữ.'
  },
  {
    id: 'challenge',
    title: 'Điểm tâm đắc và thách thức',
    body:
      'Điều em tâm đắc nhất là có thể nhìn lại sự tiến bộ của chính mình qua từng sản phẩm. Thách thức lớn nhất là thiếu định hướng ban đầu, mất thời gian chỉnh sửa và cân bằng giữa nội dung học thuật với tính trình bày để Portfolio vừa đẹp vừa giữ được trọng tâm.'
  },
  {
    id: 'future',
    title: 'Định hướng áp dụng tương lai',
    body:
      'Từ trải nghiệm này, em nhận ra tư duy hệ thống, quản lý nội dung và trình bày thông tin sẽ rất quan trọng trong học tập nâng cao và công việc sau này. Em có thể áp dụng các kỹ năng này vào báo cáo, thuyết trình, nghiên cứu và xây dựng hồ sơ nghề nghiệp cá nhân.'
  }
];

export const THANK_YOU = {
  title: 'Lời cảm ơn',
  paragraphs: [
    'Em xin được gửi lời tri ân chân thành và sâu sắc nhất tới thầy cô - những người đã truyền tải cho chúng em những tri thức công nghệ số quý báu, kiên nhẫn hướng dẫn và khơi dậy tư duy sáng tạo trong mỗi buổi học.',
    'Sự tận tụy và những định hướng đầy tâm huyết của thầy cô chính là kim chỉ nam giúp em vượt qua những giới hạn của bản thân, tự tin làm chủ công nghệ để hoàn thiện sản phẩm Portfolio này.',
    'Kính chúc thầy cô luôn dồi dào sức khỏe, hạnh phúc và luôn giữ mãi ngọn lửa nhiệt huyết để dẫn dắt thêm nhiều thế hệ học trò bước vào kỷ nguyên số của Y học hiện đại!'
  ]
};

export const PROFILE_IMAGE = profileImage;
