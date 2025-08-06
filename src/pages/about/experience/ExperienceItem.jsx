export default function ExperienceItem({ company, position, role, stack, achievement }) {
    return (
        <div>
            <h3>{company}</h3>
            <p><strong>{position}</strong></p>
            <p>{role}</p>
            <p><strong>기술 스택:</strong> {stack.join(', ')}</p>
            <p><strong>성과:</strong> {achievement}</p>
        </div>
    );
}
