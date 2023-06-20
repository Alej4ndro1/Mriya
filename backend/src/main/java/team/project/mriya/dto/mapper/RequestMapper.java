package team.project.mriya.dto.mapper;

public interface RequestMapper<E, D> {
    E toModel(D dto);
}
