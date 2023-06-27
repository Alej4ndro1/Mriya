package team.project.mriya.dto.mapper;

public interface ResponseMapper<E, D> {
    D toDto(E entity);
}
